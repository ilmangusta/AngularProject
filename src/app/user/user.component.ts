import { Component } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  styleUrl: './user.component.css'
})
export class UserComponent {
  variableUser = DUMMY_USERS[randomNumber]

  //defined like a properties, NOT A METHOD ( with () )
  getImagePath(){
    return 'assets/users/' + this.variableUser.avatar
  }

  //method definition
  onSelectionUser(){
    //change the user avatar
    console.log("clicked here - avatar changed")
    this.variableUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
  }

}
