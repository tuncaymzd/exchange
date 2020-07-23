import { Component, OnInit } from '@angular/core';
import { StockExchange } from "../models/stock-exchange";
import { StockExchangesService } from "../services/stock-exchanges.service";

@Component({
  selector: 'app-stock-exchanges-list',
  templateUrl: './stock-exchanges-list.component.html',
  styleUrls: ['./stock-exchanges-list.component.css']
})
export class StockExchangesListComponent implements OnInit {

  stockExchanges: StockExchange[];

  constructor(private stockExchangesService: StockExchangesService ) {

  }

  ngOnInit() {
    this.stockExchangesService.findAll().subscribe(data => {
      this.stockExchanges = data;
    });
  }

}
