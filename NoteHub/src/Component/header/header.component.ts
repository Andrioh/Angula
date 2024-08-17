import { Component } from '@angular/core';
import { noteservice } from '../../app/Service/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private note: noteservice){}

  AddNote(){

    const GetNote = this.note.GetNotes()
    const Ids = GetNote.map(note => note.id)
    const Id1 = Ids.length > 0 ? Math.max(...Ids) + 1 : 1
    const NoteNew = {id: Id1,title: "New note",content: "Hello!"}

    this.note.AddNote(NoteNew)
    console.log(this.note.GetNotes())
  }

  DeleteNote(){

  }

  Dle(){

  }

}
