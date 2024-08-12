import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  @Output() NewListEvent = new EventEmitter<void>();

  NewList() {
    this.NewListEvent.emit(); 
  }
}
