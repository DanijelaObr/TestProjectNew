import { Server } from '../core/server';
import { Repository } from '../core/repository';
import { ICity } from '../db/models/city/city';

export class CityRepository extends Repository<ICity> {

  constructor(server: Server, userId: string) {
    super({
      factory: server.factories.city,
      userId: userId,
      aggregationQuery: {
        
        $match: {
          'isDeleted': false
        },
        $project: {
            coord: 1,
            weather: 1,
            base: 1,
            main: 1,
            visibility: 1,
            wind: 1,
            clouds: 1,
            dt: 1,
            sys: 1,
            timezone: 1,
            id: 1,
            name: 1,
            cod: 1
          }
      },
      auditLogger: server.auditLogger
    });
  }
}
