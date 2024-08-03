import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NewTaskComponent } from "../../components/new-task/new-task.component";

@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [HeaderComponent, NewTaskComponent],
  templateUrl: './index2.component.html',
  styleUrl: './index2.component.css'
})
export class Index2Component{
 
}
