export interface ICoord {
    lon: number;
    lat: number;
 }
 
 
 export interface IWeather {
      
      id: number;
      main: string;
      description: string;
      icon: string;
    
 }
 export interface IBase {
    base: string;
 }
 export interface IMain {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
 }
 export interface IVisibility {
    visibility: number;
 }
 export interface IWind {
    speed: number; 
    deg: number; 
    gust: number;
 }
 export interface IClouds {
    all: number;
 }
 
 export interface IDt {
 
    dt: string;
 
 }
 
 export interface ISys {
 
   sunrise: string; sunset: string; 
 
 }
 
 export interface ITimezone {
 
    timezone: number;
 
 }
 
 export interface IId {
 
    id: number;
 
 }
 
//  export interface IName {
 
//     name: string;
 
//  }
 
 export interface ICod {
 
    cod: number;
 
 }