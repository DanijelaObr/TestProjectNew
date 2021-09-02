import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data/weather-data-service/weather-data.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

}
