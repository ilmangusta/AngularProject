import {NewTask} from './task/task.model';
import {Injectable} from '@angular/core'

//devo segnalare la classe come un oggetto da iniettare -> dependency injection
@Injectable({providedIn: 'root'})
export class TasksService{
  private tasks= [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');
    //se trovo unalista delle tasks nel browser, aggiorno la mia lista di task, senno uso la mia
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getAllTask(){
    return this.tasks;
  }

  getUserTask(userId: string){
    console.log("Task dell utente: " + userId + " - Task: "  + this.tasks.filter(task => task.userId==userId))
    return this.tasks.filter(task => task.userId==userId);
  }

  addNewTask(newtask: NewTask, userId: string){
    console.log("Nuova task da aggiungere: " + newtask.toString());
    this.tasks.push({
      id: '1000',
      userId: userId,
      title: newtask.title,
      summary: newtask.title,
      dueDate: newtask.date
    })
    this.saveTasks();
  }

  removeTask(id: string){
    console.log("Removing task from list of task ...")
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    console.log("saving task...")
    localStorage.setItem('tasks', JSON.stringify(this.getAllTask()))
  }
}
