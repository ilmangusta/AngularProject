import {Component,Output, EventEmitter, computed, Input, signal} from '@angular/core';
import {type User} from './user.model';

//const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)

//defining object
//method 1
//type User = {
//  id:string;
//  avatar:string;
//  name: string
//}

//method 2
//interface User {
//  id:string;
//  avatar:string;
//  name: string
//}

@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  //@Input({required:true}) user!: {
  //  id: string;
  //  avatar: string;
  //  name: string
  //}

  //method definition
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  //@Input({required: true}) id!: string;

  @Input({required:true}) selected!: boolean;
  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter<string>();
  //select = output<string>(  );

  //defined like a properties, NOT A METHOD ( with () )
  //method 1
  get imagePath(){
    //console.log( 'method1: assets/users/' + this.user.avatar);
    return 'assets/users/' + this.user.avatar;
  }

  //method 2
  getImagePath = computed(() => {
      console.log('method2: assets/users/' + this.user.avatar);
      return 'assets/users/' + this.user.avatar;
    }
  )

  onSelectUser(){
    //change the user avatar
    console.log("clicked here - pointer on user: " + this.user.name)
    //this.variableUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
    //output value
    this.select.emit(this.user.id);
  }
}
