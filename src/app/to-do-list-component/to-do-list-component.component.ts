import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.scss']
})
export class ToDoListComponentComponent implements OnInit {
  taskName = "";
  description = "";
  repeatTask = "";
  taskDone = "Done";
  status = "";
  taskChecked = "";
  descriptionChecked = "";
  statusChecked = "";
  constructor(
    private router: Router,
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentTask.subscribe(message => this.taskName = message);
    this.data.currentDescription.subscribe(message => this.description = message);
    this.data.currentRepeatTask.subscribe(message => this.repeatTask = message);
    this.data.currentTaskStatus.subscribe(message => this.status = message);

    // console.log(this.taskName, this.description, this.repeatTask);
  }

  changeCheckboxStatus(event, status) {
    if (this.taskChecked) {
      setTimeout(() => {
        this.pushValues();
      }, 1000);
    }
  }

  pushValues() {
    this.router.navigate(['/done-list']);
    this.data.passTaskData(this.taskName, this.description, this.repeatTask, this.taskDone);
  }
}
