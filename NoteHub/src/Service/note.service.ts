import { Injectable } from '@angular/core';

interface Note {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class noteservice {

  private notes: Note[] = [];

  GetNotes(){
    return this.notes
  }

  AddNote(Note: Note){
    this.notes.push(Note)
  }

  DeletNote(id: number): void{
    this.notes = this.notes.filter(notes => notes.id !== id) 
  }

  HasNote():boolean {
    return this.notes.some(notes => notes.id > 0)
  }

  GetNoteById(id: number) {
    return this.notes.find(note => note.id === id);
  }

}
