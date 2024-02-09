package com.eduadminconnect.vishnu.service;

import java.util.List;

import com.eduadminconnect.vishnu.dto.request.StudentRequest;
import com.eduadminconnect.vishnu.dto.response.StudentResponse;

public interface StudentService {
    List<StudentResponse> getAllStudents();

    StudentResponse getStudentById(Long studentId);

    StudentResponse createStudent(StudentRequest studentRequest);

    StudentResponse updateStudent(Long studentId, StudentRequest studentRequest);

    void deleteStudent(Long studentId);
}
