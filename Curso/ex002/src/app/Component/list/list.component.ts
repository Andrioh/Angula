import { Component, OnInit } from '@angular/core';
import { ListEstudoAngulaService } from '../../Service/list-estudo-angula.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  lists: any[] = [];
  addlistnew: string = ''

  constructor(private list: ListEstudoAngulaService) {}

  ngOnInit(){
    this.lists = this.list.getList();
  }
  
  addlist(){
    if (this.addlistnew.trim()){
      this.list.addList(this.addlistnew)
      this.lists = this.list.getList();
      this.addlistnew = ""
    }
  }

}
