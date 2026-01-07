package com.example.backend.dto.complaint;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
public class StatusUpdateDTO {

    @NotBlank
    private String status;
}

