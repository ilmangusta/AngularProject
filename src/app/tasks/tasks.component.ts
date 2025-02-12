import {Component, inject, Input} from '@angular/core';
import {TasksService} from './tasks.service';

@Component({
  standalone: false,
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  //non metto required nel ingresso poiche puo essere null
  // ? -> significa che puo non essere inizializzato
  //@Input() name?: string;
  //value puo essere string o undefined, cosi si risolve
  @Input({required:true}) name!: string;
  @Input({required: true}) userId!: string;
  IsAddingTask: boolean = false;

  private taskService = inject(TasksService)
  //using dependency injection without constructor
  tasks = this.taskService.getAllTask()

  get selectedUserTask(){
    return this.taskService.getUserTask(this.userId);
  }

  //onCompleteTask(id: string){
  //  //aggiorno la lista con le task che è stata precedentemente importata
  //  this.tasks =  this.tasks.filter((task) =>
  //    //gli dico che se nella lista delle task, l id dell user a cui apartiene === a quello id passato allora ok
  //    task.id !== id
  //  )
  //}

  onStartAddTask(){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.IsAddingTask=true;
  }

  onCloseAddTask(){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.IsAddingTask=false;
  }
}
