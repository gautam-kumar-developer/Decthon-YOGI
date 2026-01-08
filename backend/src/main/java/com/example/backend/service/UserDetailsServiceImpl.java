package com.example.backend.service;


import com.example.backend.model.User;
import com.example.backend.model.Admin;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.AdminRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Try to find in User table first
        var user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return UserDetailsImpl.build(user.get());
        }

        // Try to find in Admin table
        var admin = adminRepository.findByEmail(email);
        if (admin.isPresent()) {
            return UserDetailsImpl.build(admin.get());
        }

        throw new UsernameNotFoundException("User not found with email: " + email);
    }
}

