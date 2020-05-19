import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean; // 加入公開變數
  public favorite: boolean; // 加入公開變數

  constructor() {}
  // 元件初始值
  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  // 點擊時觸發的函式
  toggleFavorite() {
    console.log('We are toggling the favorite state for this stock');
    this.favorite = !this.favorite;
  }
}
