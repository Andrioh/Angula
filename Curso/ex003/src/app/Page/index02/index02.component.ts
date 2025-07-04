import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { MainComponent } from "../../Component/main/main.component";
import { MainGenComponent } from "../../Component/main-gen/main-gen.component";

@Component({
  selector: 'app-index02',
  standalone: true,
  imports: [HeaderComponent, MainComponent, MainGenComponent],
  templateUrl: './index02.component.html',
  styleUrl: './index02.component.css'
})
export class Index02Component {

}
