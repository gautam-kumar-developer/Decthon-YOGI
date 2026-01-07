package com.example.backend.dto.complaint;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ResponseDTO {

    private Long complaintId;
    private String status;
    private String description;
    private String department;
    private String priority;
    private String image;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime maxResolutionTime;

    private Long userId;
    private Long adminId;

}
