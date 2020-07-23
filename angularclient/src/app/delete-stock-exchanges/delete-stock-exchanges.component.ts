import { Component, OnInit } from '@angular/core';
import {StockExchangesService} from "../services/stock-exchanges.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-stock-exchanges',
  templateUrl: './delete-stock-exchanges.component.html',
  styleUrls: ['./delete-stock-exchanges.component.css']
})
export class DeleteStockExchangesComponent implements OnInit {

  id: string;

  constructor(private stockExchangesService: StockExchangesService,
              private route: ActivatedRoute,
              private router: Router) {
    this.id = route.snapshot.queryParams.id;
  }

  ngOnInit() {
    this.stockExchangesService.delete(this.id);
  }

}
