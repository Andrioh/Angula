import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageGenService } from '../../../Service/storage-gen.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  messages: { Title: string, About: string }[] = [];

  constructor(private storage: StorageGenService) {}

  ngOnInit() {
    this.storage.messages$.subscribe(data => {
      this.messages = data;
    });
  }
}
