import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherDataService } from '../weather-data/weather-data-service/weather-data.service';
import { City } from '../city';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  cityName = "";
  temperature = 0;

  constructor(private weatherService: WeatherDataService ){}
  city = new City( this.cityName, this.temperature);

   submitted = false;

   onSubmit(form: NgForm) { this.submitted = true;
    console.log(form.value);
    this.city.name = form.value.cityName;
    this.city.temperature = form.value.temperature;
    this.weatherService.addCity(this.city);
  
  }

  ngOnInit(): void {
  }

}
