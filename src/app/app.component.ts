import {
  Component,
  ViewEncapsulation,
  OnInit,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
} from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None, // 使用全域CSS
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit {
  title = 'stock-market';
  public stockObj: Stock;
  public stock: Stock;
  private counter: number = 1;

  testMethod() {
    console.log('Test method in AppComponent triggered.');
  }

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    console.log('App Component - On Init');
  }

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - on Changes -', changes);
  }

  onToggleFavorite(stock: Stock) {
    //這會修改股票項目元件中的值。
    //因為它會被連結股票項目元件的事件觸發。
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    //這會修改股票項目元件中的值，
    //因為我們建構股票輸入的新參考
    this.stock = new Stock(
      'Test Stock Company - ' + this.counter++,
      'TSC',
      85,
      80
    );
  }

  changeStockPrice() {
    //這會修改股票項目元件中的值，
    //因為它改變參考且Angular因OnPush
    //變更檢測策略而部會檢查
    this.stock.price += 10;
  }
}
