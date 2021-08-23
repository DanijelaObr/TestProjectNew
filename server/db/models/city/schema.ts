import { SchemaDefinition } from 'mongoose';



import { BaseSchemaDefinition } from '../../../core/db/base';

export const CitySchema: SchemaDefinition = {

    coord: {
        lon: Number,
        lat: Number
    },

    weather: [{
 
    
        id: Number,
        main: String,
        description: String,
        icon: String
     
   
   }],

   base: {
 
    base: String,
 
 },

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

visibility: {

visibility: Number,

},

wind: {

speed: Number, deg: Number, gust: Number

},

clouds: {

all: Number

},

dt: {

dt: String

},

sys: {

sunrise: String,
sunset: String

},

timezone: {

timezone: Number

},

id: {

id: Number

},

name: {

name: String

},

cod: {

cod: Number

},


  ...BaseSchemaDefinition
};




