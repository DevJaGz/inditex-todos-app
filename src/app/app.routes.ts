import { Routes } from '@angular/router';
import {
  TodosListComponent,
  AddTodoComponent,
  TodoDetailComponent,
} from '@pages';

export const routes: Routes = [
  {
    path: '',
    component: TodosListComponent,
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
