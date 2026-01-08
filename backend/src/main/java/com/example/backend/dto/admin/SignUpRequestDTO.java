package com.example.backend.dto.admin;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class SignUpRequestDTO {
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotBlank
    private String department;
}
