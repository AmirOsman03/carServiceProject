package carservice.backend.web.controllers;

import carservice.backend.dto.CreateCarDto;
import carservice.backend.dto.CreateServiceDto;
import carservice.backend.dto.DisplayCarDto;
import carservice.backend.dto.DisplayServiceDto;
import carservice.backend.model.User;
import carservice.backend.repository.UserRepository;
import carservice.backend.service.application.CarApplicationService;
import carservice.backend.service.application.ServiceApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cars")
public class CarController {

    private final CarApplicationService carApplicationService;
    private final UserRepository userRepository;
    private final ServiceApplication serviceApplication;

    public CarController(CarApplicationService carApplicationService, UserRepository userRepository, ServiceApplication serviceApplication) {
        this.carApplicationService = carApplicationService;
        this.userRepository = userRepository;
        this.serviceApplication = serviceApplication;
    }

    @GetMapping
    public List<DisplayCarDto> findAll() {
        return carApplicationService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayCarDto> findById(@PathVariable Long id) {
        return carApplicationService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<DisplayCarDto> save(@RequestBody CreateCarDto createCarDto, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return ResponseEntity.ok(carApplicationService.save(createCarDto, user));
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<DisplayCarDto> update(@PathVariable Long id, @RequestBody CreateCarDto createCarDto, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return carApplicationService.update(id, createCarDto, user)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (carApplicationService.findById(id).isPresent()) {
            carApplicationService.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("addToService/{carId}/")
    public ResponseEntity<DisplayServiceDto> createService(
            @PathVariable Long carId,
            @RequestBody CreateServiceDto serviceDto) {
        return ResponseEntity.ok(serviceApplication.createService(serviceDto, carId));
    }

}
