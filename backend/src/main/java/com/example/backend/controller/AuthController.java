package com.example.backend.controller;

import com.example.backend.dto.user.SignUpRequestDTO;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private UserService userService;
    private final UserRepository userRepository;


    @PostMapping("/public/user/register")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequestDTO signUpRequestDTO){
        User user =User.builder()
                .username(signUpRequestDTO.getUsername())
                .password(signUpRequestDTO.getPassword())
                .email(signUpRequestDTO.getEmail())
                .role("USER")
                .build();
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
    @PostMapping("/public/user/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(userService.authenticateUser(loginRequest));
    }
}
