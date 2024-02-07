import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { metaReducer, metaReducers } from './store/reducers';
import { TablerIconsModule } from 'angular-tabler-icons';
import { TodosListComponent } from './pages/todos-list/todos-list.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ICONS } from './constants/icons.constant';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    AddTodoComponent,
    TodoDetailComponent,
    NavbarComponent,
    ThemeButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(metaReducer, {
      metaReducers,
    }),
    ...environment.extModules,
    TablerIconsModule.pick(ICONS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
