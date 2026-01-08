package com.example.backend.controller;

import com.example.backend.model.Admin;
import com.example.backend.model.Complaint;
import com.example.backend.repository.AdminRepository;
import com.example.backend.repository.ComplaintRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminRepository adminRepository;
    private final ComplaintRepository complaintRepository;

    public AdminController(AdminRepository adminRepository,
                           ComplaintRepository complaintRepository) {
        this.adminRepository = adminRepository;
        this.complaintRepository = complaintRepository;
    }

    // Create Admin
    @PostMapping("/create")
    public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminRepository.save(admin));
    }

    // Get Admin by ID
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        return adminRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get complaints assigned to an admin
    @GetMapping("/{id}/complaints")
    public ResponseEntity<List<Complaint>> getAdminComplaints(@PathVariable Long id) {
        return ResponseEntity.ok(
                complaintRepository.findByAdminId(id)
        );
    }
}

