import { Component, OnInit } from '@angular/core';
import { Products } from './Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProdList:Products[]=[
    {prodId:101,prodName:"Phone",prodCost:50000},
    {prodId:102,prodName:"Charger",prodCost:500},
    {prodId:103,prodName:"Laptop",prodCost:90000}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
