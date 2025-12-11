package com.vi.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  
public class TestController {

    @GetMapping("/company")
    public Map<String, String> getCompanyMessage(@RequestParam String email) {
        Map<String, String> response = new HashMap<>();

       
        String[] parts = email.split("@");
        if (parts.length != 2) {
            response.put("message", "❌ Invalid email format");
            return response;
        }

        String domain = parts[1].toLowerCase();

        
        if (domain.contains("google")) {
            response.put("message", "👋 Welcome to Google!");
        } else if (domain.contains("microsoft")) {
            response.put("message", "💼 Welcome to Microsoft!");
        } else if (domain.contains("amazon")) {
            response.put("message", "🚀 Welcome to Amazon!");
        } else {
            response.put("message", "🏢 Welcome to " + domain + "!");
        }

        return response;
    }
}
