package carservice.backend.dto;

import carservice.backend.model.Car;
import carservice.backend.model.Service;
import carservice.backend.model.User;
import carservice.backend.model.enums.ServiceStatus;
import carservice.backend.model.enums.ServiceType;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayServiceDto(
        Long id,
        int price,
        int nextServiceKm,
        ServiceType type,
        ServiceStatus status,
        String manufacturer,
        String username
) {
    public static DisplayServiceDto from(Service service) {
        return new DisplayServiceDto(
                service.getId(),
                service.getPrice(),
                service.getNextServiceKm(),
                service.getType(),
                service.getStatus(),
                service.getCar().getManufacturer(),
                service.getCar().getUser().getUsername()
        );
    }

    public static List<DisplayServiceDto> from(List<Service> services) {
        return services.stream().map(DisplayServiceDto::from).collect(Collectors.toList());
    }

    public Service toService(Car car) {
        return new Service(price,nextServiceKm, type, status, car);
    }

}
