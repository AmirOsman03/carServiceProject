package carservice.backend.model.enums;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {

    ROLE_USER, ROLE_MECHANIC, ROLE_ADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}