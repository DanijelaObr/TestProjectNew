import {ICoord, IWeather, IBase, IMain,IVisibility, IWind, IClouds, IDt, ISys, ITimezone, IId, IName, ICod} from './objects';

export interface ICity{
    coord: ICoord;
    weather: IWeather;
    base: IBase;
    main: IMain;
    visibility: IVisibility;
    wind: IWind;
    clouds: IClouds;
    dt: IDt;
    sys: ISys;
    timezone: ITimezone;
    id: IId;
    name: IName;
    cod: ICod;
}