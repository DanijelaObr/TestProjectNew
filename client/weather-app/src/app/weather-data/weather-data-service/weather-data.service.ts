import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/city';
import { ICity } from '../cityInterface';



@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private citiesWeatherDataUrl = 'https://localhost:8043/api/cities';

  constructor(private http: HttpClient) {}

  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(this.citiesWeatherDataUrl);
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>(this.citiesWeatherDataUrl, city);
    console.log(city);
  }

  
}
