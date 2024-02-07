package com.eduadminconnect.vishnu.service;

import com.eduadminconnect.vishnu.dto.response.BasicResponse;
import com.eduadminconnect.vishnu.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
