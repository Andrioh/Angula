import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageGenService {

  constructor() { }

  Message: {Title: string, About: String}[] = [
    {Title: "Andrioh", About: "Sei lá o que recebe"}
  ]

  GetMessage(){
    return this.Message
  }

  AddMessage(Title: string, About: string){
    this.Message.push({Title, About})
  }

}
