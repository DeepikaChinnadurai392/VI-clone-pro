package com.vi.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

@RestController
@RequestMapping("/api")
public class GeneralLoginController {

    private static final Pattern VALID_GMAIL_PATTERN = Pattern.compile(
        "^[A-Za-z0-9._%+-]+\\d{2}@gmail\\.com$"
    );

    @PostMapping("/general-login")
    public LoginResponse generalLogin(@RequestBody LoginRequest request) {
        String email = request.getEmail();

        if (email == null || email.trim().isEmpty()) {
            return new LoginResponse("⚠️ Email cannot be empty.");
        }

        String trimmedEmail = email.trim();

        Matcher matcher = VALID_GMAIL_PATTERN.matcher(trimmedEmail);
        if (!matcher.matches()) {
            return new LoginResponse("⚠️ Invalid email format. Use a valid Gmail like deepika01@gmail.com");
        }

       
        int atIndex = trimmedEmail.indexOf("@");
        if (atIndex >= 2) {
            String lastTwo = trimmedEmail.substring(atIndex - 2, atIndex);
            if (lastTwo.equals("00")) {
                return new LoginResponse("⚠️ Invalid digits. '00' is not allowed before @gmail.com");
            }
        }

      
        return new LoginResponse("✅ Welcome, " + trimmedEmail + "!");
    }
}


class LoginRequest {
    private String email;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}


class LoginResponse {
    private String message;

    public LoginResponse(String message) { this.message = message; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
