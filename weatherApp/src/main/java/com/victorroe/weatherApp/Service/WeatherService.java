package com.victorroe.weatherApp.Service;

import com.victorroe.weatherApp.DTO.CurrentDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@AllArgsConstructor
public class WeatherService {

    private final WebClient webClient;

    @Value("${weatherapi.api-key}")
    private String apiKey;

    public WeatherService(WebClient webClient) {
        this.webClient = webClient;
    }

    public Mono<CurrentDTO> getCurrent(String query){
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/current.json")
                        .queryParam("key",apiKey)
                        .queryParam("q",query)
                        .build())
                .retrieve()
                .bodyToMono(CurrentDTO.class);
    }
}
