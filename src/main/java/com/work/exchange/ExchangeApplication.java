package com.work.exchange;

import com.work.exchange.models.StockExchange;
import com.work.exchange.repository.StockExchangeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ExchangeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExchangeApplication.class, args);
	}

	@Bean
	/**
	 * Init DATA
	 *
	 */
	CommandLineRunner init(StockExchangeRepository stockExchangeRepository) {
		return args -> {
			// FIRST STOCK EXCHANGE
			StockExchange stockExchange = new StockExchange();
			stockExchange.setId(1);
			stockExchange.setName("National Association of Securities Dealers Automated Quotations");
			stockExchange.setShortName("NASDAQ");
			stockExchange.setRegion("US");
			stockExchange.setMarketPlace("NEW YORK");

			// SECOND STOCK EXCHANGE
			StockExchange stockExchange2 = new StockExchange();
			stockExchange2.setId(2);
			stockExchange2.setName("Cotation Assistée en Continu");
			stockExchange2.setShortName("CAC 40");
			stockExchange2.setRegion("FRANCE");
			stockExchange2.setMarketPlace("PARIS");

			stockExchangeRepository.save(stockExchange);
			stockExchangeRepository.save(stockExchange2);
		};
	}
}
