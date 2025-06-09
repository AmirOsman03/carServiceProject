package carservice.backend.service.application.impl;

import carservice.backend.dto.CreateCarDto;
import carservice.backend.dto.DisplayCarDto;
import carservice.backend.model.User;
import carservice.backend.repository.UserRepository;
import carservice.backend.service.application.CarApplicationService;
import carservice.backend.service.domain.CarService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarApplicationServiceImpl implements CarApplicationService {

    private final CarService carService;
    private final UserRepository userRepository;

    public CarApplicationServiceImpl(CarService carService, UserRepository userRepository) {
        this.carService = carService;
        this.userRepository = userRepository;
    }

    @Override
    public List<DisplayCarDto> findAll() {
        return DisplayCarDto.from(carService.findAll());
    }

    @Override
    public Optional<DisplayCarDto> findById(Long id) {
        return carService.findById(id)
                .map(DisplayCarDto::from);
    }

    @Override
    public Optional<DisplayCarDto> update(Long id, CreateCarDto car, User user) {
        return carService.update(id, car.toCar(user))
                .map(DisplayCarDto::from);
    }

    @Override
    public DisplayCarDto save(CreateCarDto car, User user) {
        return DisplayCarDto.from(carService.save(car.toCar(user)));
    }

    @Override
    public void deleteById(Long id) {
        carService.deleteById(id);
    }

}
