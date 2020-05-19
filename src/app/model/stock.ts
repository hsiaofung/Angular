export class Stock {
  // favorite自動初始化為false。
  favorite: boolean = false;

  // 自動建立屬性
  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number
  ) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
