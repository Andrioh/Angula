import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { MainComponent } from "../../Component/main/main.component";

@Component({
  selector: 'app-index01',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  templateUrl: './index01.component.html',
  styleUrls: ['./index01.component.css']
})
export class Index01Component {

}
