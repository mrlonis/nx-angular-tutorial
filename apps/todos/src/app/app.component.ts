import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@nx-angular-tutorial/data';

@Component({
  selector: 'nx-angular-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome todos';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
