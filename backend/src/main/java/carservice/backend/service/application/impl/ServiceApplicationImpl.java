package carservice.backend.service.application.impl;

import carservice.backend.dto.CreateServiceDto;
import carservice.backend.dto.DisplayServiceDto;
import carservice.backend.model.Car;
import carservice.backend.model.enums.ServiceType;
import carservice.backend.service.application.ServiceApplication;
import carservice.backend.service.domain.CarService;
import carservice.backend.service.domain.ServiceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceApplicationImpl implements ServiceApplication {

    private final ServiceService serviceService;
    private final CarService carService;

    public ServiceApplicationImpl(ServiceService service, CarService carService) {
        this.serviceService = service;
        this.carService = carService;
    }

    @Override
    public DisplayServiceDto updatePrice(Long carId, Long serviceId, ServiceType type) {
        return DisplayServiceDto.from(serviceService.updatePrice(carId, serviceId, type));
    }

    @Override
    public DisplayServiceDto cancel(Long serviceId) {
        return DisplayServiceDto.from(serviceService.cancel(serviceId));
    }

    @Override
    public DisplayServiceDto start(Long serviceId) {
        return DisplayServiceDto.from(serviceService.start(serviceId));
    }

    @Override
    public DisplayServiceDto complete(Long serviceId) {
        return DisplayServiceDto.from(serviceService.complete(serviceId));
    }

    @Override
    public DisplayServiceDto createService(CreateServiceDto service, Long carId) {
        Car car = carService.findById(carId)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        return DisplayServiceDto.from(serviceService.createService(service.toService(car)));
    }

    @Override
    public List<DisplayServiceDto> findAll() {
        return DisplayServiceDto.from(serviceService.findAll());
    }

}
