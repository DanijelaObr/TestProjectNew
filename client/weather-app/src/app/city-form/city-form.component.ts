import { Component, OnInit } from '@angular/core';



import { City } from '../city';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {


  cityName = '';
  temperature = '';


   submitted = false;

   onSubmit() { this.submitted = true;
  
  }

  ngOnInit(): void {
  }

}
