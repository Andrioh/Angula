import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Index01Component } from "./Page/index01/index01.component";
import { Index02Component } from "./Page/index02/index02.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Index01Component, Index02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex003';
}
