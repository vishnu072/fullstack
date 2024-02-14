package com.eduadminconnect.vishnu.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduadminconnect.vishnu.model.User;

public interface UserRepository extends JpaRepository<User,String>{

  Optional<User> findByEmail(String email);

}
