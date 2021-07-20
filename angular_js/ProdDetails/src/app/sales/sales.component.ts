import { Component, OnInit } from '@angular/core';
import { Sales } from './Sales';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  saleList:Sales[]=[
    {saleId:10,salQty:4,billAmnt:6000},
    {saleId:20,salQty:3,billAmnt:4000},
    {saleId:30,salQty:1,billAmnt:1000}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
