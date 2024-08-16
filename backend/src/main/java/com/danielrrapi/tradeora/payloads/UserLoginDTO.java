package com.danielrrapi.tradeora.payloads;

import jakarta.validation.constraints.Email;

public record UserLoginDTO(@Email String email, String password) {
}
