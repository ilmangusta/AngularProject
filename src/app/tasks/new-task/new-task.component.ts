import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type NewTask} from '../task/task.model';


@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  standalone: true,
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTask>();
  enteredTitle: string = "";
  enteredSummary: string= "";
  enteredDueDate: string="";

  onCloseAddTask(){
    //aggiorno la lista con le task che è stata precedentemente importata
    this.cancel.emit()
  }



  onCreateTask(){
    console.log(this.enteredTitle,this.enteredSummary,this.enteredDueDate)
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    })

  }


}
