import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  public product: Product;
  public cartCount: number;
  public removeBtnDisable: boolean;

  constructor() {}

  ngOnInit() {
    this.product = new Product(
      '18K金項鍊',
      1000,
      '../../assets/nav-thm.jpg',
      false
    );
    this.cartCount = 0;
    this.removeBtnDisable = false;
  }
  addToCart() {
    this.cartCount += 1;
    this.removeBtnDisable = false;
  }
  removeFromCart() {
    this.cartCount -= 1;
    if (this.cartCount === 0) {
      this.removeBtnDisable = true;
    }
  }
}
