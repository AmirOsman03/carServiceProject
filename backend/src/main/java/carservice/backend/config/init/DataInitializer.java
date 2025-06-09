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

    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            CarRepository carRepository, UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.carRepository = carRepository;
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

        List<Car> cars = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Car car = new Car(
                    String.format("Manufacturer %d", i),
                    String.format("Model %d", i),
                    2010 + i,
                    10000 * i,
                    amir
            );
            cars.add(car);
        }

        List<Service> services = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Service service = new Service(
                    String.format("Service %d", i),
                    String.format("Location %d", i),
                    15000,
                    150000,
                    ServiceType.GENERAL_CHECKUP,
                    ServiceStatus.SCHEDULED,
                    cars.get(1)
            );
            services.add(service);
        }

        carRepository.saveAll(cars);
    }

}