package carservice.backend.service.application;

import carservice.backend.dto.CreateCarDto;
import carservice.backend.dto.DisplayCarDto;
import carservice.backend.model.Car;
import carservice.backend.model.User;

import java.util.List;
import java.util.Optional;

public interface CarApplicationService {

    List<DisplayCarDto> findAll();

    Optional<DisplayCarDto> findById(Long id);

    Optional<DisplayCarDto> update(Long id, CreateCarDto car, User user);

    DisplayCarDto save(CreateCarDto car, User user);

    void deleteById(Long id);

}
