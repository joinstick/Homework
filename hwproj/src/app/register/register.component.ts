import { Component, OnInit } from '@angular/core';
import { Regis } from '../model/regis';
import { Data } from '../model/data';
import { RegisService } from '../service/regis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  keepRegisData: Regis[] = [];
  regisData: Regis = new Regis();
  dataShipping: Data[];

  constructor(private regisservice: RegisService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.regisservice.getValue().subscribe((data) => {
      this.dataShipping = data.Data;
    });
  }

  addRegis() {
    let cloneRegisData = { ...this.regisData };
    this.keepRegisData.push(cloneRegisData);
  }

  selectValue(event: any) {
    this.regisData.api = event.target.value;
  }
}
