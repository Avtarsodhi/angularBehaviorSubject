import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.scss']
})
export class DoneListComponentComponent implements OnInit {
  taskName = "";
  description = "";
  repeatTask = "";
  status = "";
  taskDone = "Not Done";
  taskChecked ="";
  descriptionChecked ="";
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
  }

  changeCheckboxStatus(event, status) {
    if(this.taskChecked) {
      setTimeout(() => {
        this.pushValues();
      }, 1000);
    }
  }

  pushValues() {
    this.router.navigate(['/to-do-list']);
    this.data.passTaskData(this.taskName, this.description, this.repeatTask, this.taskDone);
  }

}
