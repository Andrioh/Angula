import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userSelecionado: User | undefined;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110)]],
    });
  }

  ngOnInit(): void {}

  SubmitForm() {
    if(this.userForm.valid){
      this.users.push(this.userForm.value)
      this.userForm.reset
    }
  }

  users: User[] = [
    { nome: "Lucas", idade: 25 },
    { nome: "João", idade: 19 },
    { nome: "Peter", idade: 45 },
    { nome: "Maria", idade: 32 }
  ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }
}
