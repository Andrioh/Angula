import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = [ 'Lucas','João', 'Peter', 'Maria']
  userSelecionado: User | undefined;
  users: User[] =[
    {
      nome: "Lucas",
      idade: 25
    },
    {
      nome: "João",
      idade: 19
    },
    {
      nome: "Peter",
      idade: 45
    },
    {
      nome: "Maria",
      idade: 32
    }
  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user
  }
}
