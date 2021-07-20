import { Injectable } from '@angular/core';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProdList()
  {
    let prodList:Product[]=[
    new Product(1,"mobile",9000),
    new Product(2,"charger",90),
    new Product(3,"pendrive",1000)
    ];

    return prodList;
  }
  constructor() { }
}
