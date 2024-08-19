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

  ConverteLocal(){
    const SavedNotes = localStorage.getItem("Notes");
    return SavedNotes ? JSON.parse(SavedNotes) : []
  }
  
  GetNotes(){
    const value = this.ConverteLocal()
    this.notes = value
    return this.notes
  }

  AddNote(Note: Note){
    this.notes.push(Note)
    localStorage.setItem("Notes",JSON.stringify(this.notes))
  }

  DeletNote(id: number): void{
    this.notes = this.GetNotes()
    this.notes = this.notes.filter(notes => notes.id !== id)
    localStorage.setItem("Notes", JSON.stringify(this.notes))    
  }

  HasNote():boolean {
    this.GetNotes()
    return this.notes.some(notes => notes.id > 0)
  }

  GetNoteById(id: number) {
    return this.notes.find(note => note.id === id);
  }

}
