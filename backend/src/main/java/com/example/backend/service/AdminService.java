package com.example.backend.service;

import com.example.backend.Roles;
import com.example.backend.model.Admin;
import com.example.backend.repository.AdminRepository;
import com.example.backend.security.jwt.JwtAuthenticationResponse;
import com.example.backend.dto.admin.LoginRequestDTO;
import com.example.backend.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {
    private PasswordEncoder passwordEncoder;
    private AdminRepository adminRepository;
    private AuthenticationManager authenticationManager;
    private JwtUtils jwtUtils;

    public Admin registerAdmin(Admin admin) {
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(Roles.ADMIN);
        return adminRepository.save(admin);
    }

    public JwtAuthenticationResponse authenticateAdmin(LoginRequestDTO loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtUtils.generateToken(userDetails);
        return new JwtAuthenticationResponse(jwt);
    }

    public Admin findByEmail(String email) {
        return adminRepository.findByEmail(email).orElseThrow(
                () -> new UsernameNotFoundException("Admin not found with email: " + email)
        );
    }
}

