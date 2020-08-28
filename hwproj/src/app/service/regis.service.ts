import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataApi } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  constructor(private http: HttpClient) { }

  getValue(): Observable<any> {
    return this.http.get<any>('https://test-apiomsimex.scglogistics.co.th/Master/Api/Master/GetAllShipper');
  }

}
