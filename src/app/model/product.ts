export class Product {
  cartItems: number = 0;
  constructor(
    public name: string,
    public price: number,
    public img: string,
    public isPromotion: boolean
  ) {}
}
