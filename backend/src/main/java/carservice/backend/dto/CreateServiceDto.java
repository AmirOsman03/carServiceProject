package carservice.backend.dto;

import carservice.backend.model.Service;
import carservice.backend.model.enums.ServiceStatus;
import carservice.backend.model.enums.ServiceType;

public record CreateServiceDto(
        ServiceType type
) {
    public Service toService(carservice.backend.model.Car car) {
        return new Service(
                0,
                0,
                type,
                ServiceStatus.SCHEDULED,
                car
        );
    }
}
