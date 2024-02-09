package com.eduadminconnect.vishnu.utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.*;

public class MyConstant{
  public static final String AUTH="/api/v1/auth";
  public static final String USER="/api/v1/user";
  public static final String COURSE="/api/v1/course";
  public static final String INSTITUTE="/api/v1/institutes";
  public static final String STUDENT="/api/v1/student";
  public static final String PAYMENT="/api/v1/payment";

  public static final String REGISTER="/register";
  public static final String LOGIN="/login";

  public static final String USERLIST="/list";

  // Courses
  public static final String CREATECOURSE="/createCourse";
  public static final String COURSELIST="/courseList";
  public static final String COURSEDELETE="/deleteCourse";
  public static final String COURSEUPDATE="/updateCourse";

  // Institute
  public static final String CREATEINSTITUTE="/createInstitute";
  public static final String INSTITUTELIST="/instituteList";
  public static final String INSTITUTEDELETE="/deleteInstitute";
  public static final String INSTITUTEUPDATE="/updateInstitute";

// Payment
public static final String CREATEPAYMENT="/createPayment";
public static final String PAYMENTLIST="/paymentList";
public static final String PAYMENTDELETE="/deletePayment";
public static final String PAYMENTUPDATE="/updatePayement";

// Student
public static final String CREATESTUDENT="/createStudent";
public static final String STUDENTLIST="/studentList";
public static final String STUDENTDELETE="/deleteStudent";
public static final String STUDENTUPDATE="/updateStudent";


  public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000");
  public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
  public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(),PUT.name(), PATCH.name(), DELETE.name(), HEAD.name());

  // JpawebToken

  public static final String SWAGGER_LOCALHOST_URL="http://localhost:8181";
  public static final String SWAGGER_SECURITY_SCHEME_NAME="bearerAuth";
  public static final String SWAGGER_SCHEME="bearer";
  public static final String SWAGGER_BEARER_FORMAT="JWT";
  public static String SWAGGER_DESCRIPTION="Produce a Json Web Token";

}
