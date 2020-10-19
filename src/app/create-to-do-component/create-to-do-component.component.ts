import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

declare var M: any;

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss']
})

export class CreateToDoComponentComponent implements OnInit {
  @ViewChild('taskNameInput', { static: true }) taskNameInput: ElementRef;
  @ViewChild('descriptionInput', { static: true }) descriptionInput: ElementRef;
  taskName = "";
  description = "";
  selectStatus = "";
  taskDone = "Not Done"
  firstNameControl = new FormControl();
  formCtrlSub: Subscription;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    const elem = document.querySelector('select');
    const options = {};
    M.FormSelect.init(elem, options);
    fromEvent(this.taskNameInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.taskName = text;
      if (this.taskName != "" && this.description != "" && this.selectStatus != "") {
        this.pushValues();
      }
    });

    fromEvent(this.descriptionInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.description = text;
      if (this.taskName != "" && this.description != "" && this.selectStatus != "") {
        this.pushValues();
      }
    });
  }

  changeStatus(event, statusValue) {
    this.selectStatus = statusValue;
    if (this.taskName != "" && this.description != "" && this.selectStatus != "") {
      this.pushValues();
    }
  }

  pushValues() {
    this.router.navigate(['/to-do-list']);
    if(this.selectStatus == "1") {
      this.selectStatus = "Yes";
    } else if(this.selectStatus == "2") {
      this.selectStatus = "No";
    }
    this.data.passTaskData(this.taskName, this.description, this.selectStatus, this.taskDone);
  }

}
