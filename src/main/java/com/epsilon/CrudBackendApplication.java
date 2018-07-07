package com.epsilon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.epsilon.entities.User;
import com.epsilon.repositories.UserRepository;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {
	
	@Autowired
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(CrudBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("Edwin", "Flores"));
		userRepository.save(new User("John", "Doe"));
		userRepository.save(new User("Jane", "Doe"));
	}
}
