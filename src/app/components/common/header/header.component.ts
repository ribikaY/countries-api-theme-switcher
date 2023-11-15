import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private themeService: ThemeService){}

  onThemeToggle(){
    this.themeService.toggleTheme();
  }

  get isDarkTheme(): boolean {
    return this.themeService.isDarkThemeEnabled();
  }
}
