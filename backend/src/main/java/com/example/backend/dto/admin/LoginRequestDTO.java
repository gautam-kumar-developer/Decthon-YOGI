package com.example.backend.dto.admin;

import lombok.Getter;

@Getter
public class LoginRequestDTO {
    private String username;
    private String password;
    private String department;
}
