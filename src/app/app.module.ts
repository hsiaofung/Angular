import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item-1/stock-item.component';
import { ProductItemComponent } from './product/product-item-2/product-item.component';
import { ProductListComponentComponent } from './product/product-list-component/product-list-component.component';

@NgModule({
  declarations: [AppComponent, StockItemComponent, ProductItemComponent, ProductListComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
