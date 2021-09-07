import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { EsLookupComponent } from './ematic-core-ui/components/es-lookup/es-lookup.component';

import { AppComponent } from './app.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { WeatherDataService } from './weather-data/weather-data-service/weather-data.service';
import { CityFormComponent } from './city-form/city-form.component';
import { FormsModule, NgForm } from '@angular/forms';
import { EmaticCoreUIModule } from './ematic-core-ui/ematic-core-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'





@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent,
    CityFormComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EmaticCoreUIModule,
    BrowserAnimationsModule
  ],
  providers: [WeatherDataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

  
  
}
