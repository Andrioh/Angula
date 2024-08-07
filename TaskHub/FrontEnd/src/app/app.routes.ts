import { Router, RouterModule, Routes } from '@angular/router';

// Pages

import { IndexComponent } from '../app/Pages/Index/index.component';
import { Index2Component } from './Pages/index2/index2.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "", component: IndexComponent },
    {path: "index2", component: Index2Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}