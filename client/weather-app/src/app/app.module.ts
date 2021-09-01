import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { WeatherDataService } from './weather-data/weather-data-service/weather-data.service';
import { CityFormComponent } from './city-form/city-form.component';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherDataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
