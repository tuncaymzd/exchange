import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockExchange } from "../models/stock-exchange";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockExchangesService {

  private stockExchangesUrl: string;

  constructor(private http: HttpClient) {
    this.stockExchangesUrl = 'http://localhost:8080/stockExchanges';
  }

  public findAll(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.stockExchangesUrl);
  }

  public save(stockExchange: StockExchange) {
    return this.http.post<StockExchange>(this.stockExchangesUrl, stockExchange);
  }

  public findById(id: string): Observable<StockExchange> {
    const url = `${this.stockExchangesUrl}/${id}`;
    return this.http.get<StockExchange>(url);
  }

  public delete(id: string) {
    const url = `${this.stockExchangesUrl}/${id}`;
    console.log(url);
    return this.http.delete(url).subscribe(data => {
      console.log(data);
    });
  }

}
