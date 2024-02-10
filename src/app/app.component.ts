import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setThemeAction } from '@store/actions';
import { selectIsDarkThemeState } from '@store/selectors';
import { THEME_STORAGE_KEY } from './constants/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.handleInitialTheme();
  }

  /**
   * Dispatch the action for the initial theme
   */
  private handleInitialTheme(): void {
    if (this.isInitialThemeDark()) {
      this.store.dispatch(setThemeAction({ isDarkTheme: true }));
    } else {
      this.store.dispatch(setThemeAction({ isDarkTheme: false }));
    }

    this.observeThemeChanges();
  }

  /**
   * Check if the initial theme is dark based on
   * the last theme set in the browser local storage or
   * the user preference color scheme
   * True, if the initial theme is found as dark, otherwise false.
   */
  private isInitialThemeDark(): boolean {
    const defaultView = this.document.defaultView;
    const window = defaultView?.window;
    const localStorage = defaultView?.localStorage;
    const isDarkThemInStorage =
      localStorage?.getItem(THEME_STORAGE_KEY) === 'dark';
    const themeKeyExist = localStorage && THEME_STORAGE_KEY in localStorage;
    const isUserPrefersDarkTheme = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return Boolean(
      isDarkThemInStorage || (!themeKeyExist && isUserPrefersDarkTheme)
    );
  }

  /**
   * Set Dark or Light Theme based on the theme changes
   */
  private observeThemeChanges(): void {
    this.store.select(selectIsDarkThemeState).subscribe({
      next: isDarkTheme => {
        if (isDarkTheme) {
          this.setDarkTheme();
          return;
        }
        this.setLightTheme();
      },
    });
  }

  /**
   * Set Dark Theme
   */
  private setDarkTheme(): void {
    this.renderer.addClass(this.document.documentElement, 'dark');
    this.setThemeInLocalStorage('dark');
  }

  /**
   * Set Light Theme
   */
  private setLightTheme(): void {
    this.renderer.removeClass(this.document.documentElement, 'dark');
    this.setThemeInLocalStorage('light');
  }

  /**
   * Set a theme in the browser local storage
   * @param themeValue - Theme to save. 'dark' or 'light'
   */
  private setThemeInLocalStorage(themeValue: string): void {
    const defaultView = this.document.defaultView;
    const localStorage = defaultView?.localStorage;
    localStorage?.setItem(THEME_STORAGE_KEY, themeValue);
  }
}
