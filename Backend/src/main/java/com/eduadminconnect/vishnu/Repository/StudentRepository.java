package com.eduadminconnect.vishnu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduadminconnect.vishnu.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
