package com.eduadminconnect.vishnu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduadminconnect.vishnu.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
