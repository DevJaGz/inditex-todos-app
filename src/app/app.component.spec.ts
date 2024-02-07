import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { routes } from './app.routes';

import { By } from '@angular/platform-browser';

@Component({ selector: 'app-navbar', template: '' })
class NavbarComponent {}

@Component({ selector: 'app-add-todo-button', template: '' })
class AddTodoButtonComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent, AddTodoButtonComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render NavbarComponent component', () => {
    expect(fixture.debugElement.query(By.css('app-navbar'))).toBeTruthy();
  });

  it('should render AddTodoButtonComponent component', () => {
    expect(
      fixture.debugElement.query(By.css('app-add-todo-button'))
    ).toBeTruthy();
  });
});
