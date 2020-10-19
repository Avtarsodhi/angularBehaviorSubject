import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private taskname = new BehaviorSubject("");
  private description = new BehaviorSubject("");
  private repeatTask = new BehaviorSubject("");
  private taskStatus = new BehaviorSubject("");

  currentTask = this.taskname.asObservable();
  currentDescription = this.description.asObservable();
  currentRepeatTask = this.repeatTask.asObservable();
  currentTaskStatus = this.taskStatus.asObservable();
  

  constructor() { }

  passTaskData(taskname, description, repeatTask, taskStatus) {
    console.log("passTaskData");
    this.taskname.next(taskname);
    this.description.next(description);
    this.repeatTask.next(repeatTask);
    this.taskStatus.next(taskStatus);
  }
}
