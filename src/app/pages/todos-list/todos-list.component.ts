import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Todo } from '@interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodoAction, removeTodoAction } from '@store/actions';
import { selectTodosListState } from '@store/selectors';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  private readonly store = inject(Store);

  todos$: Observable<Todo[]> = this.store.select(selectTodosListState);

  confirmRemoveTodo(todo: Todo): void {
    this.removeTodo(todo);
  }

  selectTodo(todo: Todo): void {
    this.store.dispatch(selectTodoAction({ todo }));
  }

  private removeTodo(todo: Todo): void {
    this.store.dispatch(removeTodoAction({ todo }));
  }
}
