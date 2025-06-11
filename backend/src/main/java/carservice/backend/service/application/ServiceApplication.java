package carservice.backend.service.application;

import carservice.backend.dto.CreateServiceDto;
import carservice.backend.dto.DisplayServiceDto;
import carservice.backend.model.Service;
import carservice.backend.model.enums.ServiceType;

import java.util.List;

public interface ServiceApplication {

    DisplayServiceDto updatePrice(Long carId, Long serviceId, ServiceType type);

    DisplayServiceDto cancel(Long serviceId);

    DisplayServiceDto start(Long serviceId);

    DisplayServiceDto complete(Long serviceId);

    DisplayServiceDto createService(CreateServiceDto service, Long carId);

    List<DisplayServiceDto> findAll();

}
