package com.example.backend.controller;

import com.example.backend.repository.UserRepository;
import com.example.backend.repository.ComplaintRepository;
import com.example.backend.model.User;
import com.example.backend.model.Complaint;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
@PreAuthorize("hasRole('USER')")
public class UserController {

    private final UserRepository userRepository;
    private final ComplaintRepository complaintRepository;

    public UserController(UserRepository userRepository,
                          ComplaintRepository complaintRepository) {
        this.userRepository = userRepository;
        this.complaintRepository = complaintRepository;
    }

    // Create User (Register)
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    // Get User by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get all complaints of a user
    @GetMapping("/{id}/complaints")
    public ResponseEntity<List<Complaint>> getUserComplaints(@PathVariable Long id) {
        return ResponseEntity.ok(
                complaintRepository.findByUserId(id)
        );
    }
}

