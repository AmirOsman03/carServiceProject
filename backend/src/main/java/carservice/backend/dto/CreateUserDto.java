package carservice.backend.dto;

import carservice.backend.model.User;
import carservice.backend.model.enums.Role;

public record CreateUserDto(
        String username,
        String password,
        String repeatPassword,
        String name,
        String surname,
        Role role
) {
    public User toUser() {
        return new User(username, password, name, surname, role);
    }
}
