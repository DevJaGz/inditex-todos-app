import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ListTodosComponent } from './pages/list-todos/list-todos.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { StoreModule } from '@ngrx/store';
import { metaReducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    AddTodoComponent,
    TodoDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(metaReducer, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
