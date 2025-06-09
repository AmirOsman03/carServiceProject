package carservice.backend.model.enums;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {

    ROLE_USER, ROLE_ADMIN, ROLE_MECHANIC;

    @Override
    public String getAuthority() {
        return name();
    }
}