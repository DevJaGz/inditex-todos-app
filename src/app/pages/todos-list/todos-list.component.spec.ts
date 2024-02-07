import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Component, Input } from '@angular/core';
import { TodosListComponent } from './todos-list.component';
import { Todo, TodosState } from '@interfaces';
import { INITIAL_TODOS_STATE } from '@constants';
import { selectTodosListState } from '@store/selectors';
import { By } from '@angular/platform-browser';

@Component({ selector: 'app-todo', template: '' })
class TodoComponent {
  @Input()
  todo!: Todo;
}

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;
  let mockStore: MockStore<TodosState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosListComponent, TodoComponent],
      providers: [
        provideMockStore({
          initialState: INITIAL_TODOS_STATE,
        }),
      ],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    mockStore.overrideSelector(selectTodosListState, INITIAL_TODOS_STATE.list);
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TodosListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial To-do List', () => {
    component.todos$.subscribe(todos => {
      expect(todos.length).toBe(3);
    });
  });

  it('should render 3 TodoComponent', () => {
    expect(
      fixture.debugElement.queryAll(By.directive(TodoComponent)).length
    ).toBe(3);
  });
});
