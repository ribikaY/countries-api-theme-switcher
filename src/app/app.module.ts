import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CountriesService } from './services/countries.service';
import { DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { CountryCardComponent } from './components/common/country-card/country-card.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CountryDetailComponent } from './components/pages/country-detail/country-detail.component';
import { SkeletonComponent } from './components/common/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CountryCardComponent,
    HomeComponent,
    CountryDetailComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
