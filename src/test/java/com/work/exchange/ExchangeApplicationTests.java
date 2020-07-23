package com.work.exchange;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ExchangeApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void givenStockExchangeDoesNotExists_whenStockExchangeInfoIsRetrieved_then404IsReceived() throws IOException {

		//GIVEN
		HttpUriRequest request = new HttpGet("http://localhost:8080/stockExchanges/100");

		//WHEN
		HttpResponse response = HttpClientBuilder.create().build().execute(request);

		//THEN
		assertEquals(response.getStatusLine().getStatusCode(), HttpStatus.SC_NOT_FOUND);

	}

	@Test
	public void givenStockExchangeExists_whenStockExchangeInfoIsRetrieved_then200IsReceived() throws IOException {

		//GIVEN
		HttpUriRequest request = new HttpGet("http://localhost:8080/stockExchanges/1");

		//WHEN
		HttpResponse response = HttpClientBuilder.create().build().execute(request);

		//THEN
		assertEquals(response.getStatusLine().getStatusCode(), 200);
	}



}
