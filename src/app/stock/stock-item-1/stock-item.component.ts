import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  // public name: string;
  // public code: string;
  // public price: number;
  // public previousPrice: number;
  // public positiveChange: boolean; // 加入公開變數
  // public favorite: boolean; // 加入公開變數

  // 宣告一個變數stock 為Stock型別
  public stock: Stock;

  // 宣告一個變數stocks作為股票清單，而非個別股票
  public stocks: Array<Stock>;

  // 新增stockClasses變數
  public stockClasses;
  public stockStyles;

  constructor() {}
  // 元件初始值
  ngOnInit() {
    // 基本的寫法 :
    // this.name = 'Test Stock Company';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favorite = false;

    // 使用TypeScript 定義型別的寫法:
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);

    //初始化stocks
    
    let diff = this.stock.price / this.stock.previousPrice - 1;
    let largeChange = Math.abs(diff) > 0.01;

    //ngClass的寫法
    this.stockClasses = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange,
    };

    //ngStyle的寫法
    this.stockStyles = {
      color: this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '1.2em' : '0.8em',
    };
  }

  // 點擊時觸發的函式
  toggleFavorite(event) {
    // 使用event存取底層DOM事件
    console.log('We are toggling the favorite state for this stock', event);
    // this.favorite = !this.favorite;
    this.stock.favorite = !this.stock.favorite;
  }
}
