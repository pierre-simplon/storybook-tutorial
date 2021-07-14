import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class PureTaskListComponent implements OnInit {

  tasksInOrder: Task[] = [];

  @Input()
    set tasks(arr: Task[]) {
      this.tasksInOrder = [
        ...arr.filter(t => t.state === 'TASK_PINNED'),
        ...arr.filter(t => t.state !== 'TASK_PINNED'),
      ];
    }

  @Input() loading = false;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

}
