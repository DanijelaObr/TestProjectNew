import { Component, OnInit } from '@angular/core';

import { ICity } from './cityInterface';
import { WeatherDataService } from './weather-data.service';


@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
  
  cities: ICity[] = [];

  constructor(private weatherService: WeatherDataService ) {}

  getCities(): void {
    this.weatherService.getCities()
    .subscribe(cities => this.cities = cities);
  }

  ngOnInit(): void {
    this.getCities();
  }

}
