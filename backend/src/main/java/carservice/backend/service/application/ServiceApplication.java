package carservice.backend.service.application;

import carservice.backend.dto.CreateServiceDto;
import carservice.backend.dto.DisplayServiceDto;
import carservice.backend.model.Service;
import carservice.backend.model.enums.ServiceType;

import java.util.List;

public interface ServiceApplication {

    DisplayServiceDto updatePrice(Long carId, Long serviceId, ServiceType type);

    DisplayServiceDto confirm(Long carId, Long serviceId);

    DisplayServiceDto cancel(Long carId, Long serviceId);

    DisplayServiceDto start(Long carId, Long serviceId);

    DisplayServiceDto complete(Long carId, Long serviceId);

    DisplayServiceDto createService(CreateServiceDto service, Long carId);

    List<DisplayServiceDto> findAll();

}
