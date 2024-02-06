import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from '@interfaces';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTodosComponent {
  todos$ = of([
    {
      id: '1',
      name: 'todo1',
      description: 'todo1 description',
    },
    {
      id: '2',
      name: 'todo2',
      description: 'todo2 description',
    },
  ]);

  confirmRemoveTodo(todo: Todo): void {
    this.removeTodo(todo);
  }

  private removeTodo(todo: Todo): void {
    console.log('remove todo:', todo);
  }
}
