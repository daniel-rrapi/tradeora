package com.danielrrapi.tradeora.entities;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "items")
@Entity
public class Item {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String category;

    private String description;

    private double price;

    private String location;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User creator;

    private boolean is_shippable;

    private boolean is_available;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Item(String name, String category, String description, double price, String location, boolean is_shippable, boolean is_available, User creator) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.location = location;
        this.is_shippable = is_shippable;
        this.is_available = is_available;
        this.creator = creator;
    }
}
