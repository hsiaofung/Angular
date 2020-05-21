import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list-component',
  template: `
    <div *ngFor="let product of products; index as i">
      <div>
        <img [src]="product.img" />
      </div>
      <h3>{{ product.name }}</h3>
      <h3>{{ product.price }}</h3>
    </div>
  `,
  styles: [
    `
      .name: {
        font-size: 50px;
      }
    `,
  ],
})
export class ProductListComponentComponent implements OnInit {
  public products: Array<Product>;

  constructor() {}

  ngOnInit(): void {
    this.products = [
      new Product('戒指', 2000, '../../assets/nav-thm.jpg', false),
      new Product('項鍊', 3000, '../../assets/nav-thm.jpg', false),
      new Product('手鐲', 4000, '../../assets/nav-thm.jpg', false),
    ];
  }
}
