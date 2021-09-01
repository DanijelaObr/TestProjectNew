import { Component } from '@angular/core';
import { City } from './city';
import { WeatherDataService } from './weather-data/weather-data-service/weather-data.service';

let city: City;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  constructor(private weatherService: WeatherDataService ) {}
  addCity(): void {
    this.weatherService.addCity(city)
    .subscribe(city => city);
 }
}
