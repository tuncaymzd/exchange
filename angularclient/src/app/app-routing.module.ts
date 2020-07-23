import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockExchangesListComponent } from "./stock-exchanges-list/stock-exchanges-list.component";
import { StockExchangesFormComponent } from "./stock-exchanges-form/stock-exchanges-form.component";
import { StockExchangesByIdFormComponent } from "./stock-exchanges-by-id-form/stock-exchanges-by-id-form.component";
import { StockExchangesComponent } from "./stock-exchanges/stock-exchanges.component";
import { DeleteStockExchangesFormComponent } from "./delete-stock-exchanges-form/delete-stock-exchanges-form.component";
import { DeleteStockExchangesComponent } from "./delete-stock-exchanges/delete-stock-exchanges.component";

const routes: Routes = [
  { path: 'stockExchanges', component: StockExchangesListComponent },
  { path: 'addstockExchanges', component: StockExchangesFormComponent },
  { path: 'stockExchangesById', component: StockExchangesByIdFormComponent},
  { path: 'displayStockExchangesById', component: StockExchangesComponent },
  { path: 'deletestockExchangesById', component: DeleteStockExchangesFormComponent },
  { path: 'displayDeleteStockExchangesById', component: DeleteStockExchangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
