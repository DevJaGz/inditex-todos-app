import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleThemeAction } from '@store/actions';
import { selectIsDarkThemeState } from '@store/selectors';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent {
  private store = inject(Store);
  isDarkTheme$: Observable<boolean> = this.store.select(selectIsDarkThemeState);

  toggleTheme(): void {
    this.store.dispatch(toggleThemeAction());
  }
}
