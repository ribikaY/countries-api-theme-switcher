import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'countries-api-theme-switcher';
  // private routeSubscription!: Subscription;

  constructor(public themeService: ThemeService){
    themeService.updateTheme();
  }

  ngOnInit(): void {
    
  }

  get isDarkTheme(): boolean {
    return this.themeService.isDarkThemeEnabled();
  }
}
