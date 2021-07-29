package com.jeterson.dio.meetingroom;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.jeterson.dio.meetingroom.model.Room;
import com.jeterson.dio.meetingroom.repositories.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class MeetingRoomApplication implements CommandLineRunner, RepositoryRestConfigurer {

	@Autowired
	private RoomRepository repository;

	
	public static void main(String[] args) {
		SpringApplication.run(MeetingRoomApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repository.save(new Room(null, "Daily", LocalDate.now(), LocalDateTime.of(2021, 07, 28, 8, 0, 0), LocalDateTime.of(2021, 07, 28, 9, 0, 0)));
		
	}

	@Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Room.class);
    }

}
