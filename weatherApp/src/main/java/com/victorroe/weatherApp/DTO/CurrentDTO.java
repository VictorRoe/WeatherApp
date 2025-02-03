package com.victorroe.weatherApp.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.victorroe.weatherApp.Model.Current;
import com.victorroe.weatherApp.Model.Location;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CurrentDTO {

    @JsonProperty("location")
    private Location location;
    @JsonProperty("current")
    private Current current;
}