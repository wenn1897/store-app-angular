import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

import {ProductsService} from './../../services/products.service';
import { Product } from './../product/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.router.params.subscribe( (params:Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
      console.log(this.product.image);
    });
  }

}
