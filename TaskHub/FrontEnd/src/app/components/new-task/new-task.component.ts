import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  constructor(private router: Router) { }

  Voltar() {
    this.router.navigate([''])
  }
}
