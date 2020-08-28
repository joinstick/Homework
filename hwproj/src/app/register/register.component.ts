import { Component, OnInit } from '@angular/core';
import { Regis } from '../model/regis';
import { DataApi, Data } from '../model/data';
import { RegisService } from '../service/regis.service';
// import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  keepRegisData: Regis[] = [];
  regisData: Regis = new Regis();
  dataShipping: Data[];

  constructor(private regisservice: RegisService) {
    console.log(this.keepRegisData);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.regisservice.getValue().subscribe((data) => {
      console.log(data);

      this.dataShipping = data.Data;
      console.log(this.dataShipping);
    });
  }

  addRegis() {
    console.log(this.regisData.lname);
    console.log(this.regisData);
    let cloneRegisData = {...this.regisData};
    this.keepRegisData.push(cloneRegisData);
    console.log(this.keepRegisData);
  }

  selectValue(event: any) {
    this.regisData.api = event.target.value;
  }
}
