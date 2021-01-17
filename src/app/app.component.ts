import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  nextId = 4;
  todos = [
    {
      id: 1,
      label: 'Bring Milk',
      done: false
    },
    {
      id: 2,
      label: 'Pay mobile bill',
      done: false
    },
    {
      id: 3,
      label: 'Bring Milk',
      done: true
    },
  ];

  delete(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodoLabel) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  toggle(todo) {
    todo.done = !todo.done;
  }
}
