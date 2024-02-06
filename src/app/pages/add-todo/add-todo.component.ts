import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Todo } from '@interfaces';
import { Store } from '@ngrx/store';
import { addTodoAction } from '@store/actions';
import { generateId } from '@utils';
import { INITIAL_TODO_STATE } from '@constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  todoViewModel: Todo = {
    ...INITIAL_TODO_STATE,
  };

  addTodo(): void {
    const todo = {
      ...this.todoViewModel,
      id: generateId(),
    };
    this.store.dispatch(addTodoAction({ todo }));
    this.navigateToList();
  }

  navigateToList(): void {
    this.router.navigate(['']);
  }
}
