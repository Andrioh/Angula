import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CubIndex1Component } from "../../components/cub-index1/cub-index1.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, CubIndex1Component],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
