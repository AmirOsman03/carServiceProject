package carservice.backend.service.domain.impl;

import carservice.backend.model.Car;
import carservice.backend.repository.CarRepository;
import carservice.backend.service.domain.CarService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    @Override
    public Optional<Car> findById(Long id) {
        return carRepository.findById(id);
    }

    @Override
    public Optional<Car> update(Long id, Car car) {
        return carRepository.findById(id)
                .map((existingCar) -> {
                    existingCar.setManufacturer(car.getManufacturer());
                    existingCar.setModel(car.getModel());
                    existingCar.setYear(car.getYear());
                    existingCar.setCurrentKm(car.getCurrentKm());
                    existingCar.setUser(car.getUser());
                    existingCar.setServices(car.getServices());
                    return carRepository.save(existingCar);
                });
    }

    @Override
    public Car save(Car car) {
        return carRepository.save(car);
    }

    @Override
    public void deleteById(Long id) {
        carRepository.deleteById(id);
    }

}
