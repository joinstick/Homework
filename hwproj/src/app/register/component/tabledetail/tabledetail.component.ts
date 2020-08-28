import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabledetail',
  templateUrl: './tabledetail.component.html',
  styleUrls: ['./tabledetail.component.css']
})
export class TabledetailComponent implements OnInit {

  constructor() { }
  @Input() dataShow: any;

  ngOnInit(): void {
  }

}
