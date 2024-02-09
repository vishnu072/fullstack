package com.eduadminconnect.vishnu.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponse {
    private Long studentId;
    private Long userId;
    private String name;
    private String gender;
    private String motherName;
    private String fatherName;
    private String nationality;
    private Long age;
    private String dob;
    private String address;
    private String mobile;
    private int marksSSLC;
    private int marksHSC;
    private int marksDiploma;
    private String eligibility;
}
