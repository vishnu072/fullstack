package com.eduadminconnect.vishnu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduadminconnect.vishnu.model.User;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);
}
