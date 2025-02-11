import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS} from './dummy-tasks';
import {NewTaskComponent} from './new-task/new-task.component';
import {type NewTask} from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
  IsAddingTask: boolean = false;


  get selectedUserTask(){
    return this.tasks.filter((task) =>
      //gli dico che se nella lista delle task, l id dell user a cui apartiene === a quello id passato allora ok
      task.userId===this.userId
    )
  }

  onCompleteTask(id: string){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.tasks =  this.tasks.filter((task) =>
      //gli dico che se nella lista delle task, l id dell user a cui apartiene === a quello id passato allora ok
      task.id !== id
    )
    //
  }

  onStartAddTask(){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.IsAddingTask=true;
  }

  onCloseAddTask(){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.IsAddingTask=false;
  }

  onAddTask(newtask: NewTask){
    console.log("nuova task: " + newtask);
    this.tasks.push({
      id: '1000',
      userId: this.userId,
      title: newtask.title,
      summary: newtask.title,
      dueDate: newtask.date
    })
    this.IsAddingTask = false;
  }


}
