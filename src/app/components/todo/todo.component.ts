import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { Todo } from '@interfaces';
import { Store } from '@ngrx/store';
import { removeTodoAction } from '@store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  private readonly store = inject(Store);

  @Input() todo!: Todo;

  confirmRemoveTodo(): void {
    // TODO: Implement confirmation dialog
    this.removeTodo(this.todo);
  }

  private removeTodo(todo: Todo): void {
    this.store.dispatch(removeTodoAction({ todo }));
  }
}
