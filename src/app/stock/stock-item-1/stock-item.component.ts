import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
} from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],

  //ChangeDetectionStrategy.OnPush : 若是父元件更新屬性，子元件不會更新視圖，但模型的資料會改變。
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit {
  // public name: string;
  // public code: string;
  // public price: number;
  // public previousPrice: number;
  // public positiveChange: boolean; // 加入公開變數
  // public favorite: boolean; // 加入公開變數

  //對成員變數加上Input，以傳入stock 物件，而非從元件中初始化。
  @Input() public stock: Stock;

  //對成員變數加上Output，以傳回事件給父元件。
  @Output() private toggleFavorite: EventEmitter<Stock>;

  // 宣告一個變數stock 為Stock型別
  //public stock: Stock;

  // 宣告一個變數stocks作為股票清單，而非個別股票
  public stocks: Array<Stock>;

  // 新增stockClasses變數
  public stockClasses;
  public stockStyles;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }
  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice() {
    this.stock.price += 5;
  }
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
    //this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);

    // 初始化stocks
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ];

    const diff = this.stock.price / this.stock.previousPrice - 1;
    const largeChange = Math.abs(diff) > 0.01;

    // ngClass的寫法
    this.stockClasses = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange,
    };

    // ngStyle的寫法
    this.stockStyles = {
      color: this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '1.2em' : '0.8em',
    };
    console.log('Stock Item Component - On Init');
  }

  ngAfterViewInit(): void {
    console.log('Stock Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('Stock Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('Stock Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('Stock Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('Stock Component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('Stock Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Component - on Changes -', changes);
  }

  // 點擊時觸發的函式
  // toggleFavorite(event, index) {
  //   // 使用event存取底層DOM事件
  //   console.log(
  //     'We are toggling the favorite state for this stock',
  //     index,
  //     event
  //   );
  //   // this.favorite = !this.favorite;
  //   this.stocks[index].favorite = !this.stocks[index].favorite;
  // }

  // 使用函數回傳值來決定如何識別個別元素。
  trackStockByCode(index, stock) {
    return stock.code;
  }
}
