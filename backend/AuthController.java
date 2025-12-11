package com.vi.backend.controller;

import com.vi.backend.model.User;
import com.vi.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

  
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        User newUser = userService.registerUser(user);
        if (newUser == null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        return ResponseEntity.ok("Signup successful for: " + user.getEmail());
    }

   
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User loggedIn = userService.loginUser(user.getEmail(), user.getPassword());
        if (loggedIn == null) {
            return ResponseEntity.status(401).body("Login failed! Invalid email or password");
        }
        return ResponseEntity.ok("Login successful for: " + loggedIn.getEmail());
    }
}