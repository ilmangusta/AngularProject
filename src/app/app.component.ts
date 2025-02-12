import {Component} from '@angular/core';
import {DUMMY_USERS} from './user/dummy-users';

//// !!! IMPORTANTE !!! da angular 19 le componenti sono standalone di defualt
// perche se ometto standalone: false -> sarà automaticamente true
@Component({
  //non sono necessari gl import se utilizzo i moduli (AppModule)
  standalone: false,
  selector: 'app-root',
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
