package com.eduadminconnect.vishnu.service;

import com.eduadminconnect.vishnu.dto.request.LoginRequest;
import com.eduadminconnect.vishnu.dto.request.RegisterRequest;
import com.eduadminconnect.vishnu.dto.response.LoginResponse;
import com.eduadminconnect.vishnu.dto.response.RegisterResponse;

public interface AuthenticationService {
  RegisterResponse register(RegisterRequest request);

  LoginResponse login(LoginRequest request);
}
