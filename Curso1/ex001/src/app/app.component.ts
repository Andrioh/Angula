import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ex001';
  ngOnInit(): void {
    this.getUser();
  }

  constructor(private UserService: UserService){

  }

  getUser(){
    const user = localStorage.getItem('user');
    this.UserService.setUser( user ? JSON.parse(user): undefined)
  }
}
