import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSelectedTodoState } from '@store/selectors';
import { Observable } from 'rxjs';
import { combineLatestWith, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-todo-button',
  templateUrl: './add-todo-button.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoButtonComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  hasSelectedTodo$: Observable<boolean> = this.store
    .select(selectSelectedTodoState)
    .pipe(map(Boolean));

  private currentRoute$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.url)
  );

  showBackButton$: Observable<boolean> = this.currentRoute$.pipe(
    combineLatestWith(this.hasSelectedTodo$),
    map(([url, hasSelectedTodo]) => {
      const showBackButton = hasSelectedTodo || url.includes('add');
      return showBackButton;
    })
  );
}
