import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageGenService } from '../../../Service/storage-gen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-gen',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-gen.component.html',
  styleUrls: ['./main-gen.component.css']
})
export class MainGenComponent {
  TitleValue: string = "";
  AboutValue: string = "";

  constructor(private storage: StorageGenService, private router: Router) {}

  GetInputValue() {
    if (this.TitleValue && this.AboutValue  ){
      this.storage.AddMessage(this.TitleValue, this.AboutValue);
    this.TitleValue = ""; // Limpa o campo de entrada
    this.AboutValue = ""; // Limpa o campo de entrada
    this.router.navigate(['']); // Navega para a tela inicial
    }
  }
}
