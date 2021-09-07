import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
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

  addCity(city: ICity): Observable<ICity> {
    console.log(JSON.stringify(city));
    return this.http.post<ICity>(this.citiesWeatherDataUrl, city);
    //console.log(city);
  }

  searchByName(query: string): Observable<ICity> {

      const url = `https://localhost:8043/api/cities/search?cityName=${query}`;
      return this.http.get<ICity>(url);
      
  }

  
}
