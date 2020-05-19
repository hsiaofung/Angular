import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item-1/stock-item.component';
import { ProductItemComponent } from './product/product-item-2/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
