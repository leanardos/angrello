import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {

  @Output() deleteEvent = new EventEmitter<any>();
  constructor() { }

  onDeleteClicked($event) {
    this.deleteEvent.emit($event);
  }
}
