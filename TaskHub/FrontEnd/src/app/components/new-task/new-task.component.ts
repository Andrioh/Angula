import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareService } from '../../service/share.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  MostrarTask: boolean = false;

  constructor(private router: Router, private ServiceValue: ShareService) {
    this.MostrarTask = this.ServiceValue.ObterTaskValue();
  }

  Voltar() {
    this.router.navigate([''])

    this.ServiceValue.AlterTaskValue(!this.ServiceValue.ObterTaskValue)
  }

  Name: string = '';
  Category: string = '';

  CreateCub() {

    if (this.Name.trim() === "" || this.Category.trim() === "") {
      console.log('[ERRO] Veja se inseriu os dados corretamente!');
    }else{
      console.log(this.Name);
      console.log(this.Category);
    
      this.Name = "";
      this.Category = "";

      this.router.navigate([""]);
    }
  }    
}
