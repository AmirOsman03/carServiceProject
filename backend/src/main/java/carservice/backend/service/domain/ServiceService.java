package carservice.backend.service.domain;

import carservice.backend.model.Service;
import carservice.backend.model.enums.ServiceType;

import java.util.List;

public interface ServiceService {

    Service updatePrice(Long carId, Long serviceId, ServiceType type);

    Service cancel(Long serviceId);

    Service start(Long serviceId);

    Service complete(Long serviceId);

    Service createService(Service service);

    List<Service> findAll();

}
