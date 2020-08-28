import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataApi } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  constructor(private http: HttpClient) { }

  getValue(): Observable<DataApi> {
    return this.http.get<DataApi>('https://test-apiomsimex.scglogistics.co.th/Master/Api/Master/GetAllShipper');
  }

}
