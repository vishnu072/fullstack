package com.eduadminconnect.vishnu.service;


import java.util.List;

import com.eduadminconnect.vishnu.dto.request.CourseRequest;
import com.eduadminconnect.vishnu.dto.response.CourseResponse;


public interface CourseService {

    List<CourseResponse> getAllCourses();

    CourseResponse getCourseById(Long courseId);

    CourseResponse createCourse(CourseRequest courseRequest);

    CourseResponse updateCourse(Long courseId, CourseRequest courseRequest);

    void deleteCourse(Long courseId);
}
