import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchangesService } from "../services/stock-exchanges.service";
import { StockExchange } from "../models/stock-exchange";

@Component({
  selector: 'app-stock-exchanges-form',
  templateUrl: './stock-exchanges-form.component.html',
  styleUrls: ['./stock-exchanges-form.component.css']
})
export class StockExchangesFormComponent {

  stockExchange : StockExchange;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockExchangesService: StockExchangesService
  ) {
    this.stockExchange = new StockExchange();
  }

  onSubmit() {
    this.stockExchangesService.save(this.stockExchange).subscribe(result => this.gotoStockExchangeList());
  }

  gotoStockExchangeList() {
    this.router.navigate(["/stockExchanges"]);
  }


}
