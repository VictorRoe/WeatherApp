package com.victorroe.weatherApp.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Current {

    @JsonProperty("last_updated_epoch")
    private Long lastUpdatedEpoch;
    @JsonProperty("last_updated")
    private String lastUpdated;
    @JsonProperty("temp_c")
    private Double tempC;
    @JsonProperty("temp_f")
    private Double tempF;
    private Integer isDay;
    private Double windMph;
    @JsonProperty("wind_kph")
    private Double windKph;
    private Integer windDegree;
    private String windDir;
    private Double pressureMb;
    private Double pressureIn;
    private Double precipMm;
    private Double precipIn;
    private Integer humidity;
    private Integer cloud;
    @JsonProperty("feelslike_c")
    private Double feelslikeC;
    @JsonProperty("feelslike_f")
    private Double feelslikeF;
    private Double windchillC;
    private Double windchillF;
    @JsonProperty("heatindex_c")
    private Double heatindexC;
    @JsonProperty("heatindex_f")
    private Double heatindexF;
    @JsonProperty("dewpoint_c")
    private Double dewpointC;
    @JsonProperty("dewpoint_f")
    private Double dewpointF;
    private Double visKm;
    private Double visMiles;
    private Double uv;
    private Double gustMph;
    private Double gustKph;
    @JsonProperty("condition")
    private Condition condition;
}
