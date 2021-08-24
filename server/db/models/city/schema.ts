import { SchemaDefinition } from 'mongoose';



import { BaseSchemaDefinition } from '../../../core/db/base';

export const CitySchema: SchemaDefinition = {
    coord: {
        lon: Number,
        lat: Number
    },
    weather: {
        id: Number,
        main: String,
        description: String,
        icon: String
   },
   base: String,
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level:Number,
    grnd_level: Number
},
visibility: Number,
wind: {
speed: Number, 
deg: Number, 
gust: Number
},
clouds: {
all: Number
},
dt: String,
sys: {
country: String,
sunrise: String,
sunset: String
},
timezone: Number,
id: Number,
name:String,
cod: Number,
  ...BaseSchemaDefinition
};
