import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { City } from '../city';

import { ICity } from './cityInterface';
import { WeatherDataService } from './weather-data-service/weather-data.service';
import { CityFormComponent } from '../city-form/city-form.component';


@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
  
  cities: ICity[] = [];
  isVisibleProp: boolean;
  
  temperature: number = 0;
  cityName: string = '';

  city = new City(this.cityName, this.temperature)
 
  

  constructor(private weatherService: WeatherDataService ) {
    this.isVisibleProp = false;
  }

  getCities(): void {
    this.weatherService.getCities()
    .subscribe(cities => this.cities = cities);
  }

  addCity(): void{
   this.weatherService
  .addCity(this.city);
  }

  

 get isVisible(): boolean {
    return this.isVisibleProp;
 }

 showToggle() {
   this.isVisibleProp = !this.isVisibleProp;
 }

  ngOnInit(): void {
    this.getCities();
    this.cities.forEach(element => {
      element.visible = false;
    });
   
  }



}
