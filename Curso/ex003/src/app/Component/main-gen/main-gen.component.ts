import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageGenService } from '../../../Service/storage-gen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-gen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-gen.component.html',
  styleUrl: './main-gen.component.css'
})
export class MainGenComponent {

  TitleValue: string = "";
  AboutValue: string = "";

  constructor(private storage:StorageGenService, private router:Router){}

  GetInputValue(){
   this.storage.AddMessage(this.TitleValue, this.AboutValue)
   console.log(this.storage.GetMessage())
   this.router.navigate([''])
  }
}
