import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Todo } from '@interfaces';
import { Store } from '@ngrx/store';
import { addTodoAction } from '@store/actions';
import { generateId } from '@utils';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  private readonly store = inject(Store);

  todoViewModel: Todo = {
    name: '',
    description: '',
  };

  addTodo(): void {
    const todo = {
      ...this.todoViewModel,
      id: generateId(),
    };
    this.store.dispatch(addTodoAction({ todo }));
  }
}
