import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {Component} from '@angular/core';
import {TasksComponent} from './tasks/tasks.component';
import {DUMMY_USERS} from './user/dummy-users';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    //questa find puo essere null nel caso non ci sia un users con quell id che matcha
    //aggiungo la sintassi ! per dichiarare che puo essere null
    return this.users.find((user) => user.id===this.selectedUserId)!;
  }

  onSelectUser(id: string){
    console.log('Selected user is: ' + id);
    this.selectedUserId=id;
  }
}
