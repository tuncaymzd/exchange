package com.work.exchange.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
/**
 * StockExchange : is the aggregation of buyers and sellers of stocks
 *
 * Example : name -> National Association of Securities Dealers Automated Quotations
 *           shortName -> NASDAQ
 *           region -> United States
 *           marketPlace -> New York
 */
public class StockExchange {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private String shortName;

    private String region;

    private String marketPlace;

}
