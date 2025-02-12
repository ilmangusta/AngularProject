import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { DatePipe } from '@angular/common'

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskComponent} from './tasks/task/task.component';
import {NewTaskComponent} from './tasks/new-task/new-task.component';

@NgModule({
  //declaration utilizzate per le componenti NON standalone
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, DatePipe, FormsModule],
  //se voglio mantenere le componenti standalone devo inserire gli import
})
export class AppModule{}
