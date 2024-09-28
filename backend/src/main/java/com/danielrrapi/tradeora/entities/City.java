package com.danielrrapi.tradeora.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "cities")
@Entity
public class City {

    @Id
    private Long id;

    private String city;

    @Column(name = "city_ascii")
    private String cityAscii;

    private String country;

    private String iso2;

    private String iso3;

    @Column(name = "admin_name")
    private String adminName;

    private String capital;

}
