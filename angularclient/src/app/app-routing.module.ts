import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockExchangesListComponent } from "./stock-exchanges-list/stock-exchanges-list.component";
import { StockExchangesFormComponent } from "./stock-exchanges-form/stock-exchanges-form.component";

const routes: Routes = [
  { path: 'stockExchanges', component: StockExchangesListComponent },
  { path: 'addstockExchanges', component: StockExchangesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
