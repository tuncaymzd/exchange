package com.work.exchange.exceptions;

import lombok.NonNull;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class StockExchangeNotFoundException extends RuntimeException {

    public StockExchangeNotFoundException(@NonNull final String message) { super(message); }
}
