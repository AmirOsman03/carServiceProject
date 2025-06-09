package carservice.backend.dto;

import carservice.backend.model.Car;
import carservice.backend.model.User;

import java.util.List;
import java.util.stream.Collectors;

public record CreateCarDto(
        String manufacturer,
        String model,
        int year,
        int currentKm
) {
    public static CreateCarDto from(Car car) {
        return new CreateCarDto(
                car.getManufacturer(),
                car.getModel(),
                car.getYear(),
                car.getCurrentKm()
        );
    }

    public static List<CreateCarDto> from(List<Car> cars) {
        return cars.stream().map(CreateCarDto::from).collect(Collectors.toList());
    }

    public Car toCar(User user) {
        return new Car(manufacturer, model, year, currentKm, user);
    }

}
