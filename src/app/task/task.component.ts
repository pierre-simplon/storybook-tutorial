import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
