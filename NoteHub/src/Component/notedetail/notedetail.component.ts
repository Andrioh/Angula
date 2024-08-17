import { Component } from '@angular/core';
import { noteservice } from '../../Service/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notedetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notedetail.component.html',
  styleUrl: './notedetail.component.css'
})

export class NotedetailComponent {

  constructor(private note: noteservice){}
 
  

}
