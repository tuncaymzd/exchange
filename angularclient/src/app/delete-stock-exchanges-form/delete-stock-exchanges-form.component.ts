import { Component, OnInit } from '@angular/core';
import {StockExchange} from "../models/stock-exchange";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-stock-exchanges-form',
  templateUrl: './delete-stock-exchanges-form.component.html',
  styleUrls: ['./delete-stock-exchanges-form.component.css']
})
export class DeleteStockExchangesFormComponent {

  stockExchange : StockExchange;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.stockExchange = new StockExchange();
  }

  onSubmit() {
    this.gotoStockExchangeDelete(this.stockExchange.id);
  }

  gotoStockExchangeDelete(id : string) {
    this.router.navigate(["/displayDeleteStockExchangesById"], { queryParams: { id } });
  }
}
