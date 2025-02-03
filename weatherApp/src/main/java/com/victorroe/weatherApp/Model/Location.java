package com.victorroe.weatherApp.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Location {

    @JsonProperty("name")
    private String name;
    @JsonProperty("region")
    private String region;
    @JsonProperty("country")
    private String country;
    private Double lat;
    private Double lon;
    @JsonProperty("tz_id")
    private String tzId;
    private Long localtimeEpoch;
    @JsonProperty("localtime")
    private String localtime;

}
