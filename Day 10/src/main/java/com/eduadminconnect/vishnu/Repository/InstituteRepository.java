package com.eduadminconnect.vishnu.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduadminconnect.vishnu.model.Institute;


@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {

}