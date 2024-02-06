import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectSelectedTodoState } from 'src/app/store/selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private store = inject(Store);

  hasSelectedTodo$: Observable<boolean> = this.store
    .select(selectSelectedTodoState)
    .pipe(map(Boolean));
}
