package com.victorroe.weatherApp.Controller;

import com.victorroe.weatherApp.DTO.CurrentDTO;
import com.victorroe.weatherApp.Service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class CurrentController {

    private final WeatherService weatherService;

    public CurrentController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public Mono<CurrentDTO> getCurrent(@RequestParam String query){
        return weatherService.getCurrent(query);
    }
}
