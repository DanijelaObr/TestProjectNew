import {ICoord, IWeather, IBase, IMain,IVisibility, IWind, IClouds, IDt, ISys, ITimezone, IId, ICod} from './objectsIntefrace';

export interface ICity{
    coord: ICoord;
    weather: IWeather[];
    base: IBase;
    main: IMain;
    visibility: IVisibility;
    wind: IWind;
    clouds: IClouds;
    dt: IDt;
    sys: ISys;
    timezone: ITimezone;
    id: IId;
    name: string;
    cod: ICod;
    visible: boolean;
}