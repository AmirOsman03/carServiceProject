package carservice.backend.web.controllers;

import carservice.backend.dto.DisplayServiceDto;
import carservice.backend.service.application.ServiceApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final ServiceApplication serviceApplication;

    public ServiceController(ServiceApplication serviceApplication) {
        this.serviceApplication = serviceApplication;
    }

    @GetMapping
    public List<DisplayServiceDto> findAll() {
        return serviceApplication.findAll();
    }

    @PostMapping("/{carId}/{serviceId}/confirm")
    public ResponseEntity<DisplayServiceDto> confirmService(@PathVariable Long carId,
                                                            @PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.confirm(carId, serviceId));
    }

    @PostMapping("/{carId}/{serviceId}/cancel")
    public ResponseEntity<DisplayServiceDto> cancelService(@PathVariable Long carId,
                                                            @PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.cancel(carId, serviceId));
    }

    @PostMapping("/{carId}/{serviceId}/start")
    public ResponseEntity<DisplayServiceDto> startService(@PathVariable Long carId,
                                                            @PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.start(carId, serviceId));
    }

    @PostMapping("/{carId}/{serviceId}/complete")
    public ResponseEntity<DisplayServiceDto> completeService(@PathVariable Long carId,
                                                            @PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.complete(carId, serviceId));
    }

}
