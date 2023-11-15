import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);

  }

  getCountryByName(name: string): Observable<Country>{
    return this.http.get<Country>(`${this.apiUrl}/name/${name}?fullText=true`);
  }

  getCountryByCode(code: string):Observable<Country>{
    return this.http.get<Country>(`${this.apiUrl}/alpha/${code}`)
  }

  searchCountriesByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`);
  }

  filterCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`);
  }
  
 
}
