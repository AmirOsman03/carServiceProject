package carservice.backend.web.controllers;

import carservice.backend.dto.CreateUserDto;
import carservice.backend.dto.DisplayUserDto;
import carservice.backend.dto.LoginResponseDto;
import carservice.backend.dto.LoginUserDto;
import carservice.backend.model.User;
import carservice.backend.model.exceptions.InvalidArgumentsException;
import carservice.backend.model.exceptions.InvalidUserCredentialsException;
import carservice.backend.model.exceptions.PasswordsDoNotMatchException;
import carservice.backend.repository.UserRepository;
import carservice.backend.service.application.UserApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserApplicationService userApplicationService;
    private final UserRepository userRepository;

    public UserController(UserApplicationService userApplicationService, UserRepository userRepository) {
        this.userApplicationService = userApplicationService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<DisplayUserDto> register(@RequestBody CreateUserDto createUserDto) {
        try {
            return userApplicationService.register(createUserDto)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        } catch (InvalidArgumentsException | PasswordsDoNotMatchException exception) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginUserDto loginUserDto) {
        try {
            return userApplicationService.login(loginUserDto)
                    .map(ResponseEntity::ok)
                    .orElseThrow(InvalidUserCredentialsException::new);
        } catch (InvalidUserCredentialsException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Principal principal) {
        String username = principal.getName();
        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = userOpt.get();
        return ResponseEntity.ok(user);
    }

}

