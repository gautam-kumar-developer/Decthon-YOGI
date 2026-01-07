package com.example.backend.repository;

import com.example.backend.model.Complaint;
import org.jspecify.annotations.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
    @Nullable List<Complaint> findByUserId(Long userId);
    List<Complaint> findByAdminId(Long adminId);
}
