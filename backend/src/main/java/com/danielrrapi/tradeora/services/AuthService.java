package com.danielrrapi.tradeora.services;

import com.danielrrapi.tradeora.entities.User;
import com.danielrrapi.tradeora.exceptions.BadRequestException;
import com.danielrrapi.tradeora.exceptions.UnauthorizedException;
import com.danielrrapi.tradeora.payloads.NewUserDTO;
import com.danielrrapi.tradeora.payloads.UserLoginDTO;
import com.danielrrapi.tradeora.repositories.UserDAO;
import com.danielrrapi.tradeora.security.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserService userService;
    @Autowired
    private UserDAO userDAO;
    @Autowired
    private JWTTools jwtTools;
    @Autowired
    private PasswordEncoder bcrypt;

    public String authenticateUserAndGenerateToken(UserLoginDTO payload) {
        User user = userService.findByEmail(payload.email());
        if (bcrypt.matches(payload.password(), user.getPassword())) {
            return jwtTools.createToken(user);
        } else {
            throw new UnauthorizedException("Wrong email or password");
        }
    }

    public User registerUser(NewUserDTO payload) {
        userDAO.findByEmail(payload.email()).ifPresent(user -> {
            throw new BadRequestException("Email " + payload.email() + " is already used");
        });
        User newUser = new User(payload.firstName(), payload.lastName(), payload.email(), bcrypt.encode(payload.password()), payload.dob(), payload.mailingList(), payload.phoneNumber());
        return userDAO.save(newUser);
    }
}
