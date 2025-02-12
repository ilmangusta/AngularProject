import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { DatePipe } from '@angular/common'

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksModule} from './tasks/tasks.module';

//// !!! IMPORTANTE !!! da angular 19 le componenti sono standalone di defualt
// perche se ometto standalone: false -> sarà automaticamente true
@NgModule({
  //declaration utilizzate per le componenti NON standalone
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],

  bootstrap: [
    AppComponent
  ],

  //browser module only imported in the main root
  imports: [
    BrowserModule,
    DatePipe,
    FormsModule,
    TasksModule
  ],
  //se voglio mantenere le componenti standalone devo inserire gli import
})
export class AppModule{}
