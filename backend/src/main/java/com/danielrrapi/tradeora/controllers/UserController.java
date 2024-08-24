package com.danielrrapi.tradeora.controllers;

import com.danielrrapi.tradeora.entities.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/me")
    public User me(@AuthenticationPrincipal User currentAuthenticatedUser) {return currentAuthenticatedUser;}
}
