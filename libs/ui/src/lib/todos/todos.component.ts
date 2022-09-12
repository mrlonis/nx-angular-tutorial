import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nx-angular-tutorial/data';

@Component({
  selector: 'nx-angular-tutorial-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}
