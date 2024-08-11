import { Routes } from '@angular/router';
import { Index01Component } from './Page/index01/index01.component';
import { Index02Component } from './Page/index02/index02.component';

export const routes: Routes = [
  { path: '', component: Index01Component },
  { path: 'index02', component: Index02Component },
];
