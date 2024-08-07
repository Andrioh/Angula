import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { userGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  user: userGit | undefined;
  constructor(private userService: UserService){

  }

  ngOnInit(): void {
   this.getGitUser();
 }
 
 getGitUser(){
  this.userService.getGitUser('Andrioh').subscribe((response: userGit) => {
    this.user = response;
  })
 }
}
