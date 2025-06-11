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

    @PostMapping("/{serviceId}/cancel")
    public ResponseEntity<DisplayServiceDto> cancelService(@PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.cancel(serviceId));
    }

    @PostMapping("/{serviceId}/start")
    public ResponseEntity<DisplayServiceDto> startService(@PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.start(serviceId));
    }

    @PostMapping("/{serviceId}/complete")
    public ResponseEntity<DisplayServiceDto> completeService(@PathVariable Long serviceId) {
        return ResponseEntity.ok(serviceApplication.complete(serviceId));
    }

}
