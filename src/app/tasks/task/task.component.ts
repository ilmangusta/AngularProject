import {Component, Input} from '@angular/core';
import {type Task} from './task.model';

//interface Task{
//  id: string;
//  userId: string;
//  title: string;
//  summary:string;
//  dueDate: string;
//}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  standalone: true,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
