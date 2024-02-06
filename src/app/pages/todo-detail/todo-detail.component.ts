import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '@interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { selectTodoAction } from '@store/actions';
import { selectTodosListState } from '@store/selectors';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly activatedRoute = inject(ActivatedRoute);

  todo$!: Observable<Todo | null>;

  ngOnInit(): void {
    this.handleSelectedTodo();
  }

  ngOnDestroy(): void {
    this.unselectTodo();
  }

  private unselectTodo(): void {
    this.store.dispatch(selectTodoAction({ todo: null }));
  }

  private handleSelectedTodo(): void {
    const todoId = this.activatedRoute.snapshot.params['todoId'];
    this.todo$ = this.getTodo(todoId).pipe(
      tap({
        next: todo => {
          if (todo) this.store.dispatch(selectTodoAction({ todo }));
        },
      })
    );
  }

  private getTodo(todoId: string): Observable<Todo | null> {
    const filter = (todo: Todo) => todo.id === todoId;
    return this.store.select(selectTodosListState).pipe(
      map(todos => {
        const todo = todos.find(filter) || null;
        return todo;
      })
    );
  }
}
