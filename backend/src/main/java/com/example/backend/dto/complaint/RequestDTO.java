package com.example.backend.dto.complaint;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestDTO {

    @NotBlank
    private String description;

    @NotBlank
    private String department;

    @NotBlank
    private String severity;

//    private String image;

}
