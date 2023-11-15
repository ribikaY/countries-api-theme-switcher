import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme: boolean = false;

  constructor() { }

  toggleTheme(){
    const isDarkThemeCopy = this.isDarkTheme;
    this.isDarkTheme = !isDarkThemeCopy;
    this.updateTheme();
  }

  updateTheme(){
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
  }

  isDarkThemeEnabled(){
    return this.isDarkTheme;
  }

}
