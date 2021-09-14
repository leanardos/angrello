import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export class ConfirmationDialogModel {
  title?: string = "Are you sure?";
  object?: any;
}

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content class="content">
      
      <div mat-dialog-actions>
        <button class="btn-margin-right confirm-btn" mat-button [mat-dialog-close]="data" cdkFocusInitial>Confirm</button>
        <button class="btn-margin-right cancel-btn" mat-button [mat-dialog-close]="data" cdkFocusInitial>Cancel</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogModel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
