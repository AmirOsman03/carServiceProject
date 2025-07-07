package carservice.backend.repository;

import carservice.backend.model.domain.Service;
import carservice.backend.model.enums.ServiceStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

    Service findByCarIdAndStatus(Long carId, ServiceStatus status);

}
