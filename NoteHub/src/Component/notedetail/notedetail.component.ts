import { Component, input, OnInit } from '@angular/core';
import { noteservice } from '../../Service/note.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notedetail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notedetail.component.html',
  styleUrls: ['./notedetail.component.css']
})
export class NotedetailComponent implements OnInit {
  constructor(private noteService: noteservice, private router: Router, private route: ActivatedRoute) {}

  noteId!: number;
  note: any;
  ContentMessage: string | undefined

  ngOnInit() {
    this.noteId = +this.route.snapshot.params['id'];
    this.loadNoteDetails(this.noteId);
  }

  loadNoteDetails(id: number) {
    this.note = this.noteService.GetNoteById(id);
  }
   
}
