package com.example.backend.controller;

import com.example.backend.Roles;
import com.example.backend.dto.admin.LoginRequestDTO;
import com.example.backend.dto.admin.SignUpRequestDTO;
import com.example.backend.dto.user.UserLoginRequestDTO;
import com.example.backend.model.Admin;
import com.example.backend.model.User;
import com.example.backend.repository.AdminRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.AdminService;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
@CrossOrigin
public class AuthController {

    private UserService userService;
    private AdminService adminService;
    private final UserRepository userRepository;
    private final AdminRepository adminRepository;

    // User Registration
    @PostMapping("/public/user/register")
    public ResponseEntity<?> registerUser(@RequestBody com.example.backend.dto.user.SignUpRequestDTO signUpRequestDTO){
        User user = User.builder()
                .password(signUpRequestDTO.getPassword())
                .email(signUpRequestDTO.getEmail())
                .role(Roles.USER)
                .build();
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    // User Login
    @PostMapping("/public/user/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginRequestDTO loginRequest){
        return ResponseEntity.ok(userService.authenticateUser(loginRequest));
    }

    // Admin Registration
    @PostMapping("/public/admin/register")
    public ResponseEntity<?> registerAdmin(@RequestBody SignUpRequestDTO signUpRequestDTO){
        Admin admin = Admin.builder()
                .password(signUpRequestDTO.getPassword())
                .email(signUpRequestDTO.getEmail())
                .role(Roles.ADMIN)
                .department(signUpRequestDTO.getDepartment())
                .build();
        Admin registeredAdmin = adminService.registerAdmin(admin);
        return ResponseEntity.ok(registeredAdmin);
    }

    // Admin Login
    @PostMapping("/public/admin/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginRequestDTO loginRequest){
        return ResponseEntity.ok(adminService.authenticateAdmin(loginRequest));
    }
}
