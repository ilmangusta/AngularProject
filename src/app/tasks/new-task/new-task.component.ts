import {Component, EventEmitter, Output, inject, Input} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  //injection without using costructor
  private tastService = inject(TasksService)

  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle: string = "";
  enteredSummary: string= "";
  enteredDueDate: string="";

  onCloseAddTask(){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.close.emit()
  }

  onCreateTask(){
    console.log(this.enteredTitle,this.enteredSummary,this.enteredDueDate)
    this.tastService.addNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    }, this.userId)
    this.close.emit()
  }
}
