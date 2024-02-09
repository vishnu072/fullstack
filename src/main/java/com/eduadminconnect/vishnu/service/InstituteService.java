package com.eduadminconnect.vishnu.service;


import java.util.List;

import com.eduadminconnect.vishnu.dto.request.InstituteRequest;
import com.eduadminconnect.vishnu.dto.response.InstituteResponse;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();

    InstituteResponse getInstituteById(Long instituteId);

    InstituteResponse createInstitute(InstituteRequest instituteRequest);

    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);

    void deleteInstitute(Long instituteId);
}