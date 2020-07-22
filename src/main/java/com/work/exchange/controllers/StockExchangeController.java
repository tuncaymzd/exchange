package com.work.exchange.controllers;

import com.work.exchange.exceptions.StockExchangeNotFoundException;
import com.work.exchange.models.StockExchange;
import com.work.exchange.repository.StockExchangeRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class StockExchangeController {

    private final StockExchangeRepository stockExchangeRepository;

    @GetMapping("/stockExchanges")
    public List<StockExchange> getAllStockExchanges() {
        final List<StockExchange> result = (List<StockExchange>) stockExchangeRepository.findAll();

        if (result.isEmpty()) {
            throw new StockExchangeNotFoundException("No stock exchange were found");
        }
        return result;
    }

    @PostMapping("/stockExchanges")
    public void addStockExchange(@RequestBody final StockExchange stockExchange) {
        stockExchangeRepository.save(stockExchange);
    }

    @GetMapping("/stockExchanges/{id}")
    public StockExchange getStockExchange(@PathVariable final String id) {
        final StockExchange stockExchange = stockExchangeRepository
                .findById(Long.parseLong(id))
                        .orElseThrow(() ->
                                new StockExchangeNotFoundException("The stock exchange with id = " + id + " does not exist")
                        );

        return stockExchange;
    }

    @PutMapping("/stockExchanges")
    public StockExchange editStockExchange(@RequestBody final StockExchange stockExchange) {
        final StockExchange stockExchangeToEdit = stockExchangeRepository
                .findById(stockExchange.getId())
                .orElseThrow(() ->
                        new StockExchangeNotFoundException("The stock exchange with id = " + stockExchange.getId() + " does not exist")
                );

        stockExchangeRepository.save(stockExchange);
        return stockExchange;
    }

    @DeleteMapping("/stockExchanges/{id}")
    public ResponseEntity deleteStockExchange(@PathVariable final String id) {
        stockExchangeRepository.deleteById(Long.parseLong(id));
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
