import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareService } from '../../service/share.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  MostrarTask: boolean = false;

  constructor(private router: Router, private ServiceValue: ShareService){
    this.MostrarTask = this.ServiceValue.ObterTaskValue();
  }

  Voltar() {
    this.router.navigate([''])

    this.ServiceValue.AlterTaskValue(!this.ServiceValue.ObterTaskValue)
  }
}
