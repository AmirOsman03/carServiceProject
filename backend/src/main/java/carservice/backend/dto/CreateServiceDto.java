package carservice.backend.dto;

import carservice.backend.model.domain.Service;
import carservice.backend.model.domain.Car;
import carservice.backend.model.enums.ServiceStatus;
import carservice.backend.model.enums.ServiceType;

public record CreateServiceDto(
        ServiceType type
) {
    public Service toService(Car car) {
        return new Service(
                0,
                0,
                type,
                ServiceStatus.SCHEDULED,
                car
        );
    }
}
