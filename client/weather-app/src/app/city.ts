export class City{

    name: string;
    temperature: number;

    constructor(public nameCity: string, public temperatureCity: number){
        this.name = nameCity;
        this.temperature = temperatureCity;
    }
}