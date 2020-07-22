package com.work.exchange.repository;

import com.work.exchange.models.StockExchange;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockExchangeRepository extends CrudRepository<StockExchange, Long> {

}
