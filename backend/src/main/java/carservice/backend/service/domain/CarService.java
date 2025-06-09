package carservice.backend.service.domain;

import carservice.backend.model.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {

    List<Car> findAll();

    Optional<Car> findById(Long id);

    Optional<Car> update(Long id, Car car);

    Car save(Car car);

    void deleteById(Long id);

}
