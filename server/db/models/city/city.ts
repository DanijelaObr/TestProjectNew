import { IIdentifier } from '../../../core/models/db/identifier';
import { IAuditInfo, ISoftDelete } from '../../../core/models/db/audit-info';
//import { IRole } from '../role/role';

import {ICoord, IWeather, IMain,IVisibility, IWind, IClouds, IDt, ISys, ITimezone, IId, IName, ICod} from '../../../../server/city-weather-data/arrObjects';

export interface ICity extends IIdentifier, ISoftDelete, IAuditInfo {
    coord: ICoord;
    weather: IWeather[];
    //base: IBase;
    main: IMain;
    visibility: IVisibility;
    wind: IWind;
    clouds: IClouds;
    dt: IDt;
    sys?: ISys;
    timezone: ITimezone;
    id: IId;
    name: IName;
    cod: ICod;
}

