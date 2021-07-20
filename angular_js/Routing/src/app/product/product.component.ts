import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodList:Product[]=[];

  constructor(prodService:ProductService) {

    this.prodList=prodService.getProdList();
    console.log(this.prodList);
   }

  ngOnInit(): void {
  }

}
