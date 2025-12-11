package com.vi.backend.controller;

import com.vi.backend.model.Application;
import com.vi.backend.repository.ApplicationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationRepository applicationRepository;

    public ApplicationController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    
    @GetMapping
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

   
    @GetMapping("/{id}")
    public Optional<Application> getApplicationById(@PathVariable Long id) {
        return applicationRepository.findById(id);
    }

    
    @PostMapping
    public Application createApplication(@RequestBody Application application) {
        return applicationRepository.save(application);
    }

    
    @PutMapping("/{id}")
    public Application updateApplication(@PathVariable Long id, @RequestBody Application applicationDetails) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found with id " + id));
        application.setStudentId(applicationDetails.getStudentId());
        application.setInternshipId(applicationDetails.getInternshipId());
        application.setStatus(applicationDetails.getStatus());
        return applicationRepository.save(application);
    }

   
    @DeleteMapping("/{id}")
    public String deleteApplication(@PathVariable Long id) {
        applicationRepository.deleteById(id);
        return "Application with id " + id + " deleted successfully!";
    }
}
