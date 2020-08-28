import { Component, OnInit } from '@angular/core';
import { Regis } from '../model/regis';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;

  fname: string;
  lname: string;
  age: number;
  regisData: Array<Regis> = [];

  constructor() {
    //SelectItem API with label-value pairs
    this.cities1 = [
        {label:'Select City', value:null},
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];

    //An array of cities
    this.cities2 = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
}

  ngOnInit(): void {
  }

  addRegis() {
    let regis = new Regis();
    regis.fname = this.fname;
    regis.lname = this.lname;
    regis.age = this.age;
    this.regisData.push(regis);
  }


}
interface City {
  name: string;
  code: string;
}
