package carservice.backend.service.domain;

import carservice.backend.model.Service;
import carservice.backend.model.enums.ServiceType;

import java.util.List;

public interface ServiceService {

    Service updatePrice(Long carId, Long serviceId, ServiceType type);

    Service confirm(Long carId, Long serviceId);

    Service cancel(Long carId, Long serviceId);

    Service start(Long carId, Long serviceId);

    Service complete(Long carId, Long serviceId);

    Service createService(Service service);

    List<Service> findAll();

}
