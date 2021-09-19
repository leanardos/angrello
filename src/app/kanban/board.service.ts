import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { Board, BoardTask } from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFirestore) { }

  // Creates a new board for the current user
  async createBoard(data: Board) {
    const user = await this.angularFireAuth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user.uid,
      tasks: [{description: 'Hello', label: 'yellow'}]
    });
  }

  deleteBoard(boardId: string) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .delete();
  }

  updateTask(boardId: string, tasks: BoardTask[]) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({tasks})
  }

  updateBoard(boardId: string, board: Board) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({board})
  }

  removeTask(boardId: string, task: BoardTask) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task)
      });
  }

  getUserBoards() {
    return this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.collection<Board>('boards', ref => 
            ref.where('uid', '==', user.uid).orderBy('priority')    
          )
          .valueChanges({ idField: 'id' })
        } else {
          return [];
        }
      })
    )
  }

  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('board').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit;
  }
}
