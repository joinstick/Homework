import { Component, OnInit } from '@angular/core';
import { Regis } from '../model/regis';
import { DataApi } from '../model/data';
import { RegisService } from '../service/regis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  fname: string;
  lname: string;
  age: number;
  regisData: Array<Regis> = [];
  a: Array<any> = [];
  b: DataApi = new DataApi();
  api: string = '';
  constructor(private regisservice: RegisService) {
    // this.a = new Array<any>();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.regisservice.getValue().subscribe((data) => {
      this.b = data;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.b.Data.length; i++) {
        this.a.push(this.b.Data[i].value);
      }
      console.log(this.a);
    });

  }

  addRegis() {
    let regis = new Regis();
    regis.fname = this.fname;
    regis.lname = this.lname;
    regis.age = this.age;
    regis.api = this.api;
    this.regisData.push(regis);
  }

  selectValue(event: any) {
    this.api = event.target.value;
  }
}
