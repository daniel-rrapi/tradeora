package com.danielrrapi.tradeora.controllers;

import com.danielrrapi.tradeora.entities.User;
import com.danielrrapi.tradeora.payloads.NewUserDTO;
import com.danielrrapi.tradeora.payloads.UserLoginDTO;
import com.danielrrapi.tradeora.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody UserLoginDTO payload) {
        return authService.authenticateUserAndGenerateToken(payload);
    }

    @PostMapping("/register")
    public User register(@RequestBody NewUserDTO payload) {
        return authService.registerUser(payload);
    }
}
