import { ChangeDetectionStrategy, Component } from '@angular/core';
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
      name: 'todo1',
      description: 'todo1 description',
    },
    {
      name: 'todo2',
      description: 'todo2 description',
    },
  ]);
}
