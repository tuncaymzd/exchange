import { Component, OnInit } from '@angular/core';
import { StockExchange } from "../models/stock-exchange";
import { StockExchangesService } from "../services/stock-exchanges.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.css']
})
export class StockExchangesComponent implements OnInit {

  stockExchange: StockExchange;
  id: string;

  constructor(private stockExchangesService: StockExchangesService,
              private route: ActivatedRoute,
              private router: Router) {
    this.id = route.snapshot.queryParams.id;
  }

  ngOnInit() {
      this.stockExchangesService.findById(this.id).subscribe(data => {
      this.stockExchange = data;
    });
  }

}
