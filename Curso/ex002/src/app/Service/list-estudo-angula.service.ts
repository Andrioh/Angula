import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListEstudoAngulaService {

  private List: String[] = ["Item 1", "Item 2", "Item 3"];

  constructor() { }

  getList() {
    return this.List;
  }


  
}
