package com.danielrrapi.tradeora.services;

import com.danielrrapi.tradeora.entities.User;
import com.danielrrapi.tradeora.exceptions.NotFoundException;
import com.danielrrapi.tradeora.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;

    public User findById(String id) {
        return userDAO.findById(UUID.fromString(id))
                .orElseThrow(() -> new NotFoundException("The user with id: " + id + " was not found"));
    }

    public User findById(UUID id) {
        return userDAO.findById(id)
                .orElseThrow(() -> new NotFoundException("The user with id: " + id + " was not found"));
    }

    public User findByEmail(String email) {
        return userDAO.findByEmail(email).orElseThrow(() -> new NotFoundException("The user with email: " + email + " was not found"));
    }
}
