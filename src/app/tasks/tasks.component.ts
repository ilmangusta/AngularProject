import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS} from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = DUMMY_TASKS
  //non metto required nel ingresso poiche puo essere null
  // ? -> significa che puo non essere inizializzato
  //@Input() name?: string;
  //value puo essere string o undefined, cosi si risolve
  @Input({required:true}) name!: string;
  @Input({required: true}) userId!: string;

  get selectedUserTask(){
    return this.tasks.filter((task) =>
      //gli dico che se nella lista delle task, l id dell user a cui apartiene === a quello id passato allora ok
      task.userId===this.userId
    )
  }


}
