package com.junction.bicycles.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class BicycleStation {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String lat;
    private String lon;
    private Integer maxNumOfSlots;
    private Integer currentNumOfBicycles;

    public BicycleStation() {}
}
