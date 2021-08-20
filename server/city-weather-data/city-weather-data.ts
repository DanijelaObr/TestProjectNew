import { ICity } from "./city";

const request = require('request-promise-native');

export class CityWeatherData {
    
    getRandomInt(min, max) : number{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

     maxLat: Number = 55;
     minLat: Number = 34;

     maxLon: Number = 16;
     minLon: Number = 101;


    async  getData() {

      const key: string = '4ab6375a6e03c10b5e0855e8f4741916';
      let arrayCity: ICity[] = [];
      for (let i = 0; i < 10; i++) {

        const lat: Number = this.getRandomInt(this.minLat, this.maxLat);
        const lon: Number = this.getRandomInt(this.minLon, this.maxLon);

        
        try{
          
           const options = {
             method: 'GET'
             ,url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
             ,json: true
           }
           const response = await request(options)
           arrayCity[i] = response;
          //  console.log(response)
          //  return response;
           
         }
   
        catch(error) {
         console.log( error)
       }
        
      }
      //console.log(arrayCity);    
  }
}