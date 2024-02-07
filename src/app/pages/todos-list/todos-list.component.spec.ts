import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Component, Input } from '@angular/core';
import { TodosListComponent } from './todos-list.component';
import { Todo, TodosState } from '@interfaces';
import { INITIAL_TODOS_STATE } from '@constants';
import { selectTodosListState } from '@store/selectors';
import { By } from '@angular/platform-browser';
import { MemoizedSelector } from '@ngrx/store';

@Component({ selector: 'app-todo', template: '' })
class TodoComponent {
  @Input()
  todo!: Todo;
}

// eslint-disable-next-line @angular-eslint/component-selector
@Component({ selector: 'tabler-icon', template: '' })
class TablerIconComponent {
  @Input()
  name!: string;
}

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;
  let mockStore: MockStore<TodosState>;
  let selectMock: MemoizedSelector<TodosState, Todo[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosListComponent, TodoComponent, TablerIconComponent],
      providers: [
        provideMockStore({
          initialState: INITIAL_TODOS_STATE,
        }),
      ],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    selectMock = mockStore.overrideSelector(
      selectTodosListState,
      INITIAL_TODOS_STATE.list
    );
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TodosListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should load the initial To-do List', () => {
    component.todos$.subscribe(todos => {
      expect(todos.length).toBe(3);
    });
  });

  it('should render 3 TodoComponent', () => {
    expect(
      fixture.debugElement.queryAll(By.directive(TodoComponent)).length
    ).toBe(3);
  });

  it('should load 0 To-do', () => {
    selectMock.setResult([]);
    component.todos$.subscribe(todos => {
      expect(todos.length).toBe(0);
    });
  });

  it('should render empty template when no todos are emitted', () => {
    selectMock.setResult([]);
    mockStore.refreshState();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#empty-template'))).toBeTruthy();
  });
});
