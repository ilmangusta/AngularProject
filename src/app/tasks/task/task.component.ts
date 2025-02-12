import {Component, Input, inject} from '@angular/core';
import {type Task} from './task.model';
import {TasksService} from '../tasks.service';

//interface Task{
//  id: string;
//  userId: string;
//  title: string;
//  summary:string;
//  dueDate: string;
//}

@Component({
  standalone: false,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskService = inject(TasksService);

  onCompleteTask(){
    //this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }
}
