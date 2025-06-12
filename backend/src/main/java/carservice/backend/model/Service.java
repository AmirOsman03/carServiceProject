package carservice.backend.model;

import carservice.backend.model.enums.ServiceStatus;
import carservice.backend.model.enums.ServiceType;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String location;

    private int price;

    private int nextServiceKm;

    @Enumerated(EnumType.STRING)
    private ServiceType type;

    @Enumerated(EnumType.STRING)
    private ServiceStatus status;

    @ManyToOne
    private Car car;

    @ManyToOne
    private User user;

    public Service(String name, String location, int price, int nextServiceKm, ServiceType type, ServiceStatus status, Car car) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.nextServiceKm = nextServiceKm;
        this.type = type;
        this.status = status;
        this.car = car;
    }

    public Service(int price, int nextServiceKm, ServiceType type, ServiceStatus status, Car car) {
        this.price = price;
        this.nextServiceKm = nextServiceKm;
        this.type = type;
        this.status = status;
        this.car = car;
    }
}
