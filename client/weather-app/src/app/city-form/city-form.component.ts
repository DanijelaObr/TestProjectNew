import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICity } from '../weather-data/cityInterface';

import { WeatherDataService } from '../weather-data/weather-data-service/weather-data.service';


@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {
  
  city: ICity = null;

  constructor(private weatherService: WeatherDataService ){}
 
   submitted = false;

   async onSubmit() { 
     this.submitted = true;
    //console.log(form.value);
    await this.weatherService.addCity(this.city).subscribe(value => console.log(value));
  
  }

  onCitiesQuery = (query: string) => this.weatherService.searchByName(query);

  getCity(): boolean {
   
    return this.city ? false : true;

  }
    

  ngOnInit(): void {
  }

}
