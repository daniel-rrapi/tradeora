package com.danielrrapi.tradeora.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.time.LocalDate;

public record NewUserDTO(@NotBlank(message = "The name cannot be blank") String firstName,
                         @NotBlank(message = "The last name cannot be blank") String lastName,
                         @Email(message = "Email is not valid") @NotBlank(message = "Email cannot be blank") String email,
                         @Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", message = "Your password must be at least 8 characters long and include:\n" +
                                 "- At least one uppercase letter (A-Z)\n" +
                                 "- At least one lowercase letter (a-z)\n" +
                                 "- At least one number (0-9)\n" +
                                 "- At least one special character (e.g., @$!%*?&)\n ") String password,
                         @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING) @NotNull(message = "Date of birth cannot be null")
                         LocalDate dob, boolean mailingList,
                         @Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$", message = "Invalid phone number") String phoneNumber) {
}
