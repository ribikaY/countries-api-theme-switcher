import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  selectedRegion: string = "default";
  countries: Country[] = [];
  filteredCountries:Country[] = [];
  searchQuery: string = "";
  searchFound: boolean = true;
  isLoading: boolean = true;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
  
    this.countriesService.getCountries().subscribe(
      (response) => {
        this.countries = response;
        this.filteredCountries = this.countries;
        this.sortCountriesByName();
        this.isLoading = false;
      },
      (error)=>{
        this.isLoading = false;
      }
    )
  }

  onSearch(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (!searchText) {
      this.searchFound = true;
      this.filteredCountries = this.countries;
    } 
    
    else {
      this.searchQuery = searchText;

      // Filter the countries based on the search input
      this.countriesService.searchCountriesByName(searchText).subscribe(
        (response)=>{
          this.searchFound = true;
          this.filteredCountries = response;
        },

        (error) => {
          if(error.status == 404){
            this.searchFound = false;
            this.filteredCountries = []; 
          }
        }
      )
    }
  }

  sortCountriesByName(): void{
    this.countries.sort((countryA:any, countryB:any) => String(countryA.name.common).localeCompare(String(countryB.name.common)));
  } 

  onRegionSelected(): void{
    this.isLoading = true;

    if(this.selectedRegion === "all" || this.selectedRegion === "default"){
      this.filteredCountries = this.countries;
      console.log(this.filteredCountries);
      this.isLoading = false;
    }

    else{
      this.countriesService.filterCountriesByRegion(this.selectedRegion).subscribe(
        (response) => {
          console.log(response);
          this.filteredCountries = response;
          this.isLoading = false;
        },
        (error)=>{
          this.isLoading = false;
        }
      )
    }
  }

}
