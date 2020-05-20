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

  // 宣告變數products為商品清單
  public products: Array<Product>;
  public quantities: Array<number>;
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
    this.products = [
      new Product('戒指', 2000, '../../assets/nav-thm.jpg', false),
      new Product('項鍊', 3000, '../../assets/nav-thm.jpg', false),
      new Product('手鐲', 4000, '../../assets/nav-thm.jpg', false),
    ];
    this.quantities = [];
    for (let i = 0; i <= 20; i++) {
      this.quantities.push(i);
    }
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
