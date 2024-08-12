import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./Component/main/main.component";
import { CreateComponent } from "./Component/create/create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex004';
}
