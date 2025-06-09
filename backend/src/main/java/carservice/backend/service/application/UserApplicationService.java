package carservice.backend.service.application;

import carservice.backend.dto.CreateUserDto;
import carservice.backend.dto.DisplayUserDto;
import carservice.backend.dto.LoginResponseDto;
import carservice.backend.dto.LoginUserDto;

import java.util.Optional;

public interface UserApplicationService {

    Optional<DisplayUserDto> register(CreateUserDto createUserDto);

    Optional<LoginResponseDto> login(LoginUserDto loginUserDto);

    Optional<DisplayUserDto> findByUsername(String username);

}

