import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherDataService } from '../weather-data/weather-data-service/weather-data.service';


@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  

  constructor(private weatherService: WeatherDataService ){}
 
  

   submitted = false;

   async onSubmit(form: any) { 
     this.submitted = true;
    //console.log(form.value);
    await this.weatherService.addCity(form).subscribe(value => console.log(value));
  
  }

  ngOnInit(): void {
  }

}
