package com.work.exchange.controllers;

import com.work.exchange.exceptions.StockExchangeNotFoundException;
import com.work.exchange.models.StockExchange;
import com.work.exchange.repository.StockExchangeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
/**
 * REST Controller of Stock Exchange
 *
 */
public class StockExchangeController {

    private final StockExchangeRepository stockExchangeRepository;

    @GetMapping("/stockExchanges")
    /**
     * Get all stock exchanges
     *
     * @return list of all stock exchanges
     */
    public List<StockExchange> getAllStockExchanges() {
        final List<StockExchange> result = (List<StockExchange>) stockExchangeRepository.findAll();

        if (result.isEmpty()) {
            throw new StockExchangeNotFoundException("No stock exchange were found");
        }
        log.info("Found {} stock exchanges", result.size());
        return result;
    }

    @PostMapping("/stockExchanges")
    /**
     * Add stock exchange
     *
     * @param stockExchange to add
     * @return void
     */
    public void addStockExchange(@RequestBody final StockExchange stockExchange) {
        log.info("Request to add stock exchange : {}", stockExchange);
        stockExchangeRepository.save(stockExchange);
    }

    @GetMapping("/stockExchanges/{id}")
    /**
     * Get stock exchange by id
     *
     * @param id
     * @exception StockExchangeNotFoundException if id does not exist
     * @return StockExchange corresponding to the id
     */
    public StockExchange getStockExchange(@PathVariable final String id) {
        final StockExchange stockExchange = stockExchangeRepository
                .findById(Long.parseLong(id))
                        .orElseThrow(() ->
                                new StockExchangeNotFoundException("The stock exchange with id = " + id + " does not exist")
                        );
        log.info("Found stock exchange with id : {} and value : {}", id, stockExchange);
        return stockExchange;
    }

    /**
     * Edit stock exchange
     *
     * @param stockExchange represent the new element
     * @exception StockExchangeNotFoundException if stockExchange id does not exist into database
     * @return edited stock exchange
     */
    @PutMapping("/stockExchanges")
    public StockExchange editStockExchange(@RequestBody final StockExchange stockExchange) {
        final StockExchange stockExchangeToEdit = stockExchangeRepository
                .findById(stockExchange.getId())
                .orElseThrow(() ->
                        new StockExchangeNotFoundException("The stock exchange with id = " + stockExchange.getId() + " does not exist")
                );
        log.info("Value of old stock exchange equals : {} and new stock exchange equals : {}", stockExchangeToEdit, stockExchange);
        stockExchangeRepository.save(stockExchange);
        return stockExchange;
    }

    @DeleteMapping("/stockExchanges/{id}")
    /**
     * Remove stock exchange by id
     *
     * @param id
     * @exception StockExchangeNotFoundException stockExchange id does not exist into databases
     * @return Http 204 if success
     */
    public ResponseEntity deleteStockExchange(@PathVariable final String id) {
        final StockExchange stockExchange = stockExchangeRepository
                .findById(Long.parseLong(id))
                .orElseThrow(() ->
                        new StockExchangeNotFoundException("The stock exchange with id = " + id + " does not exist")
                );
        stockExchangeRepository.deleteById(Long.parseLong(id));
        log.info("delete stock exchange with id : {}", id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
