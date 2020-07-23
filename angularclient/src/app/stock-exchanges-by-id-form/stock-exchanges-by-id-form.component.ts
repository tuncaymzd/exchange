import { Component } from '@angular/core';
import {StockExchange} from "../models/stock-exchange";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-exchanges-by-id-form',
  templateUrl: './stock-exchanges-by-id-form.component.html',
  styleUrls: ['./stock-exchanges-by-id-form.component.css']
})
export class StockExchangesByIdFormComponent {

  stockExchange : StockExchange;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.stockExchange = new StockExchange();
  }

  onSubmit() {
    this.gotoStockExchange(this.stockExchange.id);
  }

  gotoStockExchange(id : string) {
    this.router.navigate(["/displayStockExchangesById"], { queryParams: { id } });
  }

}
