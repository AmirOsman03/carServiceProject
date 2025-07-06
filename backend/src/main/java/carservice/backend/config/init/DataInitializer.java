package carservice.backend.config.init;

import carservice.backend.model.domain.User;
import carservice.backend.model.enums.Role;
import carservice.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

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
        User admin = new User(
                "admin",
                passwordEncoder.encode("admin"),
                "Admin",
                "Admin",
                Role.ROLE_ADMIN
        );
        userRepository.save(admin);

        User john = new User(
                "john",
                passwordEncoder.encode("john"),
                "John",
                "Test",
                Role.ROLE_MECHANIC
        );
        userRepository.save(john);

        User user = new User(
                "user",
                passwordEncoder.encode("user"),
                "User",
                "User",
                Role.ROLE_USER
        );
        userRepository.save(user);
    }

}