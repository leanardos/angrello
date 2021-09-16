import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardTask } from '../board.model';
import { BoardService } from './../board.service';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

export class TaskDialogModel {
  boardId: string;
  index: number;
  isNew: boolean;
  task: BoardTask
}

@Component({
  selector: 'app-task-dialog',
  template: `
    <h1 mat-dialog-title>Board</h1>
    <div mat-dialog-content class="content">
      <mat-form-field>
        <textarea rows="1" placeholder="Task description" matInput [(ngModel)]="data.task.description"></textarea>
      </mat-form-field>
      <br/>
      <mat-button-toggle-group #group="matButtonToggleGroup" [(ngModel)]="data.task.label">
        <mat-button-toggle *ngFor="let opt of labelOptions" [value]="opt">
          <mat-icon [ngClass]="opt"> {{opt === 'gray' ? 'check_circle' : 'lens'}}</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>  
    </div>

    <div mat-dialog-actions>
      <button class="btn-margin-right" mat-button [mat-dialog-close]="data" cdkFocusInitial>{{ data.isNew ? 'Add Task' : 'Update Task'}}</button>
      <app-delete-button (deleteEvent)="deleteTask(data.boardId, data.task)" *ngIf="!data.isNew"></app-delete-button>
    </div>
    
  `,
  styleUrls: ['./task-dialog.component.scss']
})

export class TaskDialogComponent {

  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(private boardService: BoardService, private dialog: MatDialog,
    public dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TaskDialogModel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  console(data) {
    console.log(data)
  }
  deleteTask(boardId: string, task: BoardTask): void {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {title: `Do you confirm to delete task`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.boardService.removeTask(boardId, task)
      }
    });
  }
}
