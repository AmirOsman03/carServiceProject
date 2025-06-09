package carservice.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String manufacturer;

    private String model;

    private int year;

    private int currentKm;

    @ManyToOne
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    List<Service> services;

    public Car(String manufacturer, String model, int year, int currentKm, User user) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.currentKm = currentKm;
        this.user = user;
    }

}
