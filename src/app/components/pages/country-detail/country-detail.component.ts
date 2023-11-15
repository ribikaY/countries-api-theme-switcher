import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/Country';
import { CountriesService } from 'src/app/services/countries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit{
  private routeSubscription!: Subscription;

  country?: Country;
  languages: any[] = [];
  currencies: any[] = [];
  nativeName: string = "";
  borderCountries: Country[] = [] ;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private countriesService: CountriesService){}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const countryName = params['name'];
      this.initCountryDetail(countryName);
    })   
  }
  
   initCountryDetail(name: string): void{
      this.isLoading = true;
      this.countriesService.getCountryByName(name).subscribe(
        (response) => {
          this.country = response[0];
          const countryCopy = response[0];

          if(countryCopy.currencies){
            this.currencies = this.getObjectValues(countryCopy.currencies);
          }

          if(countryCopy.languages){
            this.languages = this.getObjectValues(countryCopy.languages);
          }

          if(countryCopy.name.nativeName){
            this.nativeName = this.getObjectValues(countryCopy.name.nativeName)[0].common;
          }
          
          if(countryCopy.borders){
            this.borderCountries = [];
            this.getBorderCountries(countryCopy.borders);
          }

          this.isLoading = false;
          console.log(response[0]);
        },
        (error) => {
          this.isLoading = false;
        }
      ) 
   }


   getBorderCountries(borders: string[]): void{
    console.log(borders);
    borders.forEach((border) => {
      this.countriesService.getCountryByCode(border).subscribe(
        (response) => {
          this.borderCountries.push(response[0]);
        },

        (error) => {
          console.log("Error fetching border countries");
        }
      ) 
    })

   
   }

  getObjectValues(obj:any): any[]{
    return Object.values(obj);
  }
}
