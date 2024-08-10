import { Component, OnInit } from '@angular/core';
import { ListEstudoAngulaService } from '../../Service/list-estudo-angula.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  lists: any[] = [];

  constructor(private list: ListEstudoAngulaService) {}

  ngOnInit(){
    this.lists = this.list.getList();
  }

}
