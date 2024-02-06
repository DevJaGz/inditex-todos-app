import { Routes } from '@angular/router';
import {
  ListTodosComponent,
  AddTodoComponent,
  TodoDetailComponent,
} from '@pages';

export const routes: Routes = [
  {
    path: '',
    component: ListTodosComponent,
  },
  {
    path: 'add',
    component: AddTodoComponent,
  },
  {
    path: 'list/:todoId',
    component: TodoDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
