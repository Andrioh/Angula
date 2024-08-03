import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  MostrarTask: boolean = true; 

  constructor(private router: Router) {}

  alterarValor(novoValor: boolean) {
    this.MostrarTask = novoValor; 
  }

  clickNewTask() {
    this.router.navigate(['/index2']);

    
    this.MostrarTask = !this.MostrarTask;

    console.log(this.MostrarTask); 
  }
}
