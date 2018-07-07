package com.epsilon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epsilon.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
}
