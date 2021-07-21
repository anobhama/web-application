import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css']
})
export class ProductByIdComponent implements OnInit {

  product: any;
  id: any;
  constructor(
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private Service: ProductService
  ) {}
  sub: any;
  ngOnInit() {
    this.sub = this.Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      let products = this.Service.getProdList();
      this.product = products.find((p) => p.prodId == this.id);
      console.log(this.product);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this.router.navigate(['Product']);
  }

}
