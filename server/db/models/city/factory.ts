import { Connection } from 'mongoose';

import { Factory } from '../../../core/db/factory';
import { CitySchema } from './schema';
import { ICity } from './city';

export class CityFactory extends Factory<ICity> {
  constructor(connection: Connection) {
    super({
      connection: connection,
      name: 'City',
      definition: CitySchema,
      indexes: [
        {
          fields: {
            'name': [], //we need it for search?
            'deletedAt': 1
          },
          options: {
            'unique': true
          }
        }
      ]
    });
  }
}
