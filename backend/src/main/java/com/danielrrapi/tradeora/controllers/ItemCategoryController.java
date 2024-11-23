package com.danielrrapi.tradeora.controllers;

import com.danielrrapi.tradeora.enums.ItemCategory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/items/categories")
public class ItemCategoryController {

    @GetMapping
    public ResponseEntity<ItemCategory[]> getItemCategories () {
        return ResponseEntity.ok(ItemCategory.values());
    }
}
