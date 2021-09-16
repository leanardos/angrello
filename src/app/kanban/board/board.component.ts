import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from '../board.service';
import { Board, BoardTask } from './../board.model';
import { ConfirmationDialogComponent } from './../dialogs/confirmation-dialog.component';
import { TaskDialogComponent } from './../dialogs/task-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() board: Board;

  currentBoardId: number;
  currentTask: BoardTask;
  
  constructor(private boardService: BoardService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTask(this.board.id, this.board.tasks);
  }

  openDialog(task?: BoardTask, idx?: number): void {
    this.currentBoardId = idx;
    this.currentTask = task;
    const newTask = { label: 'purple' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNew) {
          this.boardService.updateTask(this.board.id, [
            ...this.board.tasks,
            result.task
          ]);
        }
        else {
          const update = this.board.tasks;
          update.splice(result.idx, 1, result.task);
          this.boardService.updateTask(this.board.id, this.board.tasks);
        }
      }
    });
  }

  deleteBoard(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {title: `Do you confirm to delete board: '${this.board.title}'`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.boardService.deleteBoard(this.board.id);
      }
    });
  }
}
