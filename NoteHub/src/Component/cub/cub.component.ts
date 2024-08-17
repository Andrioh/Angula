import { Component, OnInit } from '@angular/core';
import { noteservice } from '../../Service/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cub.component.html',
  styleUrl: './cub.component.css'
})

export class CubComponent {
  constructor(private note: noteservice){}

  HasNote: boolean | undefined;

  get notes(){
   return this.note.GetNotes()
  }

  hasnote(): boolean {
    this.HasNote = this.note.HasNote();
    return this.HasNote;
}
 
}
