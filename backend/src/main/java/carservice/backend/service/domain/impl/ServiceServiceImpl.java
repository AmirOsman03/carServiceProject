package carservice.backend.service.domain.impl;

import carservice.backend.model.Car;
import carservice.backend.model.Service;
import carservice.backend.model.enums.ServiceStatus;
import carservice.backend.model.enums.ServiceType;
import carservice.backend.repository.CarRepository;
import carservice.backend.repository.ServiceRepository;
import carservice.backend.service.domain.ServiceService;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;
    private final CarRepository carRepository;

    public ServiceServiceImpl(ServiceRepository serviceRepository, CarRepository carRepository) {
        this.serviceRepository = serviceRepository;
        this.carRepository = carRepository;
    }

    @Override
    public Service updatePrice(Long carId, Long serviceId, ServiceType type) {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new IllegalArgumentException("Service not found"));

        if (!service.getCar().getId().equals(car.getId())) {
            throw new IllegalArgumentException("Service does not belong to the specified car");
        }

        service.setPrice(calculatePrice(type));
        service.setNextServiceKm(calculateNextService(type));

        return serviceRepository.save(service);
    }

    private int calculateNextService(ServiceType type) {
        return switch (type) {
            case OIL_CHANGE -> 10000;
            case BRAKE_SERVICE -> 7000;
            case GENERAL_CHECKUP -> 40000;
            default -> 0;
        };
    }

    private int calculatePrice(ServiceType type) {
        return switch (type) {
            case OIL_CHANGE -> 10000;
            case TIRE_CHANGE -> 1000;
            case BRAKE_SERVICE -> 4000;
            case GENERAL_CHECKUP -> 2000;
            default -> 0;
        };
    }

    @Override
    public Service confirm(Long carId, Long serviceId) {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new IllegalArgumentException("Service not found"));

        if (!service.getCar().getId().equals(car.getId())) {
            throw new IllegalArgumentException("Service does not belong to the specified car");
        }

        service.setStatus(ServiceStatus.CONFIRMED);
        return serviceRepository.save(service);
    }

    @Override
    public Service cancel(Long carId, Long serviceId) {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new IllegalArgumentException("Service not found"));

        if (!service.getCar().getId().equals(car.getId())) {
            throw new IllegalArgumentException("Service does not belong to the specified car");
        }

        service.setStatus(ServiceStatus.CANCELLED);
        return serviceRepository.save(service);
    }

    @Override
    public Service start(Long carId, Long serviceId) {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new IllegalArgumentException("Service not found"));

        if (!service.getCar().getId().equals(car.getId())) {
            throw new IllegalArgumentException("Service does not belong to the specified car");
        }

        service.setStatus(ServiceStatus.IN_PROGRESS);
        return serviceRepository.save(service);
    }

    @Override
    public Service complete(Long carId, Long serviceId) {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new IllegalArgumentException("Service not found"));

        if (!service.getCar().getId().equals(car.getId())) {
            throw new IllegalArgumentException("Service does not belong to the specified car");
        }

        service.setStatus(ServiceStatus.COMPLETED);
        return serviceRepository.save(service);
    }

    public Service createService(Service service) {
        Long carId = service.getCar().getId();
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        int calculatedPrice = calculatePrice(service.getType());
        int calculatedNextServiceKm = calculateNextService(service.getType());

        service.setPrice(calculatedPrice);
        service.setNextServiceKm(calculatedNextServiceKm);
        service.setStatus(ServiceStatus.SCHEDULED);
        service.setCar(car);

        return serviceRepository.save(service);
    }

    @Override
    public List<Service> findAll() {
        return serviceRepository.findAll();
    }

}
