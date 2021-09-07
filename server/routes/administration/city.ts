import { NextFunction } from 'express';
//import { Types } from 'mongoose';

import { Router } from '../../core/express/router';
import { Server } from '../../core/server';
import { IRequest } from '../../core/models/express/request';
import { IResponse } from '../../core/models/express/response';
import { CityRepository } from '../../repositories/city';
import { CityWeatherData } from '../../city-weather-data/city-weather-data';

//import { BadRequestError } from '../../core/error/user-friendly';
//import { Passport } from '../../core/auth/passport';

export class CityRouter extends Router {

  constructor(server: Server) {
    super(server);
  }

  initRoutes() {
    this.router.route('/')
      .get(this.queryAll.bind(this))
      .post(this.createCity.bind(this));

 

      this.router.route('/search')
      .get(this.searchByName.bind(this));


  }

  async queryAll(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const userId = this.getUserId(request);
      const cr = new CityRepository(this.server, userId);

    response.data = await cr.query();
    
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

  async createCity(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const userId = this.getUserId(request);
      const cr = new CityRepository(this.server, userId);
      const city = request.body;
      console.log(city);

      const created = await cr.create(cityNew => {

        cityNew.coord = city.coord;
        cityNew.weather = city.weather;
        cityNew.main = city.main;
        cityNew.visibility = city.visibility;
        cityNew.wind = city.wind;
        cityNew.clouds = city.clouds;
        cityNew.dt = city.dt;
        cityNew.sys = city.sys;
        cityNew.timezone = city.timezone;
        cityNew.id = city.id
        cityNew.name = city.name;
        cityNew.cod = city.cod;
      });

    response.data = await cr.getOne({ '_id': created._id });
    
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

  async searchByName(request: IRequest, response: IResponse, next: NextFunction)
  {
    try {
      //const userId = this.getUserId(request);
      //const cr = new CityRepository(this.server, userId);

      const name = request.query.cityName;
      const newCity = new CityWeatherData();

      const city = await newCity.getCityByName(name);
      //response.data = [city];
       response.data = !city ? [] : [city];
      // const created = await cr.create(cityNew => {
      //  cityNew.name = city.name;
      // });
    // response.data = await cr.getOne({ '_id': created._id });
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

}




