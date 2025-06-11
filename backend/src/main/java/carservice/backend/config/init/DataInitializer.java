package carservice.backend.config.init;

import carservice.backend.model.Car;
import carservice.backend.model.Service;
import carservice.backend.model.User;
import carservice.backend.model.enums.Role;
import carservice.backend.model.enums.ServiceStatus;
import carservice.backend.model.enums.ServiceType;
import carservice.backend.repository.CarRepository;
import carservice.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

//    @PostConstruct
    public void init() {
        User amir = new User(
                "amir",
                passwordEncoder.encode("amir"),
                "Amir",
                "Osman",
                Role.ROLE_ADMIN
        );
        userRepository.save(amir);

        User john = new User(
                "john",
                passwordEncoder.encode("john"),
                "John",
                "Test",
                Role.ROLE_MECHANIC
        );
        userRepository.save(john);
    }

}