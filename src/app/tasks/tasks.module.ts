import {NgModule} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TasksComponent} from './tasks.component';


@NgModule({
  //declaration utilizzate per le componenti NON standalone
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],

  //se voglio mantenere le componenti standalone devo inserire gli import
  //commonmodule utilizzo simile a browser module ma utilizzato non nella root main
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
  ],

  exports: [
    TasksComponent
  ]
})
export class TasksModule{}
