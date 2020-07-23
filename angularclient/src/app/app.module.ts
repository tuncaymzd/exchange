import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StockExchangesListComponent } from './stock-exchanges-list/stock-exchanges-list.component';
import { StockExchangesFormComponent } from './stock-exchanges-form/stock-exchanges-form.component';
import { StockExchangesService } from "./services/stock-exchanges.service";
import { StockExchangesComponent } from './stock-exchanges/stock-exchanges.component';
import { StockExchangesByIdFormComponent } from './stock-exchanges-by-id-form/stock-exchanges-by-id-form.component';
import { DeleteStockExchangesComponent } from './delete-stock-exchanges/delete-stock-exchanges.component';
import { DeleteStockExchangesFormComponent } from './delete-stock-exchanges-form/delete-stock-exchanges-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StockExchangesListComponent,
    StockExchangesFormComponent,
    StockExchangesComponent,
    StockExchangesByIdFormComponent,
    DeleteStockExchangesComponent,
    DeleteStockExchangesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockExchangesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
