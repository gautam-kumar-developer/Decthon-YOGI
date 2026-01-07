package com.example.backend.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;

@Getter
public class LoginRequestDTO {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
