package com.example.backend.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;

@Getter
public class UserLoginRequestDTO {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
}
