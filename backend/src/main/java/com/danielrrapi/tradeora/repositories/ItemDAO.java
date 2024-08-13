package com.danielrrapi.tradeora.repositories;

import com.danielrrapi.tradeora.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ItemDAO extends JpaRepository<Item, UUID> {
}
