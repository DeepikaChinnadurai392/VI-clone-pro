package com.vi.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*") // Required for frontend connection
@RequestMapping("/api/videos") // Fixing API endpoint path
public class VideoController {

    @GetMapping
    public List<Map<String, String>> getVideos() {
        List<Map<String, String>> videos = new ArrayList<>();

        Map<String, String> v1 = new HashMap<>();
        v1.put("videoId", "DzSE8Xfxlwo");
        v1.put("title", "Virtual Internship Overview");
        v1.put("description", "Discover how Virtual Internships give students hands-on experience in a professional setting...");
        videos.add(v1);

        Map<String, String> v2 = new HashMap<>();
        v2.put("videoId", "SK1obyU6fQM");
        v2.put("title", "Global Impact Through Internships");
        v2.put("description", "See how students across the globe make a real impact through virtual internships...");
        videos.add(v2);

        Map<String, String> v3 = new HashMap<>();
        v3.put("videoId", "0IUMZBwlmWA");
        v3.put("title", "Students Share Their Experience");
        v3.put("description", "Hear inspiring stories from students who completed virtual internships...");
        videos.add(v3);

        Map<String, String> v4 = new HashMap<>();
        v4.put("videoId", "imL_BkR93qo");
        v4.put("title", "Future of Remote Internships");
        v4.put("description", "Explore the future of remote internships and global work experience...");
        videos.add(v4);

        Map<String, String> v5 = new HashMap<>();
        v5.put("videoId", "_X1AoQcvmvs");
        v5.put("title", "Virtual Internship Success Story");
        v5.put("description", "Witness the success stories of students who leveraged virtual internships...");
        videos.add(v5);

        Map<String, String> v6 = new HashMap<>();
        v6.put("videoId", "8oFEN7c313E");
        v6.put("title", "Explore Your Career Path");
        v6.put("description", "Explore diverse career paths through virtual internship experiences...");
        videos.add(v6);

        return videos;
    }
}