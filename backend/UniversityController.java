package com.vi.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/university")
@CrossOrigin(origins = "http://localhost:3000")
public class UniversityController {

    
    private static final List<String> ALLOWED_BATCH_CODES = Arrays.asList(
        "ABCDE12345", "FGHIJ67890", "KLMNO09876"
    );
    private static final List<String> ALLOWED_DURATIONS = Arrays.asList("2", "3", "6");

    @PostMapping("/verify")
    public ResponseEntity<?> verifyBatch(@RequestBody BatchRequest request) {

    
        if (request.getBatchCode() == null || request.getBatchCode().isEmpty()) {
            return ResponseEntity.badRequest().body("❌ Batch code is required");
        }

        if (!ALLOWED_BATCH_CODES.contains(request.getBatchCode())) {
            return ResponseEntity.badRequest().body("❌ Invalid batch code! Please enter a valid one.");
        }

       
        if (request.getCourseDuration() == null || request.getCourseDuration().isEmpty()) {
            return ResponseEntity.badRequest().body("❌ Course duration is required");
        }

        if (!ALLOWED_DURATIONS.contains(request.getCourseDuration())) {
            return ResponseEntity.badRequest().body("❌ Invalid duration! Allowed values: 2, 3, or 6");
        }

        
        return ResponseEntity.ok(
            "✅ Welcome to our University! Batch verified successfully: " + request.getBatchCode() +
            " | Duration: " + request.getCourseDuration() + " Months  "
        );
    }

    
    public static class BatchRequest {
        private String batchCode;
        private String courseDuration;

        public String getBatchCode() {
            return batchCode;
        }

        public void setBatchCode(String batchCode) {
            this.batchCode = batchCode;
        }

        public String getCourseDuration() {
            return courseDuration;
        }

        public void setCourseDuration(String courseDuration) {
            this.courseDuration = courseDuration;
        }
    }
}