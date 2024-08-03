import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareService } from '../../service/share.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  MostrarTask: boolean = true; 

  constructor(private router: Router, private ServiceValue: ShareService){
    this.MostrarTask = this.ServiceValue.ObterTaskValue();
  }

  clickNewTask() {
    this.router.navigate(['/index2']);
    this.ServiceValue.AlterTaskValue(!this.MostrarTask);
    this.MostrarTask = this.ServiceValue.ObterTaskValue();
  }
}
