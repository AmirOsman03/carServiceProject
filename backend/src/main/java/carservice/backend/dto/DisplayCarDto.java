package carservice.backend.dto;

import carservice.backend.model.Car;
import carservice.backend.model.User;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayCarDto(
        Long id,
        String manufacturer,
        String model,
        int year,
        int currentKm,
        String username
) {
    public static DisplayCarDto from(Car car) {
        return new DisplayCarDto(
                car.getId(),
                car.getManufacturer(),
                car.getModel(),
                car.getYear(),
                car.getCurrentKm(),
                car.getUser() != null ? car.getUser().getUsername() : null
        );
    }

    public static List<DisplayCarDto> from(List<Car> cars) {
        return cars.stream().map(DisplayCarDto::from).collect(Collectors.toList());
    }

    public Car toCar(User user) {
        return new Car(manufacturer, model, year, currentKm, user);
    }

}
