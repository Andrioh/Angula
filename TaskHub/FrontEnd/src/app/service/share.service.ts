import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  MostrarTask: boolean = true;

  ObterTaskValue(){
    return this.MostrarTask;
  }

  AlterTaskValue(newValue: boolean): void{
    this.MostrarTask = !this.MostrarTask
  }
}