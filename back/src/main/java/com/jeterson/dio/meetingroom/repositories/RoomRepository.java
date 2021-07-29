package com.jeterson.dio.meetingroom.repositories;

import com.jeterson.dio.meetingroom.model.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(path = "room", collectionResourceRel = "room")
public interface RoomRepository extends JpaRepository<Room, Long>{

    
}
