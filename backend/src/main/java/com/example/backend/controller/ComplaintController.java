package com.example.backend.controller;

import com.example.backend.model.Admin;
import com.example.backend.model.Complaint;
import com.example.backend.model.User;
import com.example.backend.repository.AdminRepository;;
import com.example.backend.repository.ComplaintRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintRepository complaintRepository;
    private final UserRepository userRepository;
    private final AdminRepository adminRepository;

    public ComplaintController(ComplaintRepository complaintRepository,
                               UserRepository userRepository,
                               AdminRepository adminRepository) {
        this.complaintRepository = complaintRepository;
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;
    }

    // Raise a Complaint
    @PostMapping("/create/{userId}")
    public ResponseEntity<Complaint> createComplaint(
            @PathVariable Long userId,
            @RequestBody Complaint complaint) {

        User user = userRepository.findById(userId).orElseThrow();
        complaint.setUser(user);

        return ResponseEntity.ok(complaintRepository.save(complaint));
    }

    // Assign Complaint to Admin
    @PutMapping("/{complaintId}/assign/{adminId}")
    public ResponseEntity<Complaint> assignComplaint(
            @PathVariable Long complaintId,
            @PathVariable Long adminId) {

        Complaint complaint = complaintRepository.findById(complaintId).orElseThrow();
        Admin admin = adminRepository.findById(adminId).orElseThrow();

        complaint.setAdmin(admin);
        return ResponseEntity.ok(complaintRepository.save(complaint));
    }

    // Update Complaint Status
    @PutMapping("/{complaintId}/status")
    public ResponseEntity<Complaint> updateStatus(
            @PathVariable Long complaintId,
            @RequestParam String status) {

        Complaint complaint = complaintRepository.findById(complaintId).orElseThrow();
        complaint.setStatus(status);

        return ResponseEntity.ok(complaintRepository.save(complaint));
    }

    // Get Complaint by ID
    @GetMapping("/{complaintId}")
    public ResponseEntity<Complaint> getComplaint(@PathVariable Long complaintId) {
        return complaintRepository.findById(complaintId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get All Complaints
    @GetMapping
    public ResponseEntity<List<Complaint>> getAllComplaints() {
        return ResponseEntity.ok(complaintRepository.findAll());
    }
}
