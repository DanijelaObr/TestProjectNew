import { NextFunction } from 'express';
//import { Types } from 'mongoose';

import { Router } from '../../core/express/router';
import { Server } from '../../core/server';
import { IRequest } from '../../core/models/express/request';
import { IResponse } from '../../core/models/express/response';
import { CityRepository } from '../../repositories/city';

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

      await cr.create(grad => {
        grad.name = city.name;
        grad.main.temp = city.temperature;
      });

    //response.data = await cr.query();
    
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

}




