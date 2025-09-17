package UserAuthenticationSystem.UserAunthentication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    
    private String token;
    private String type = "Bearer";
    private String message;
    private String name;
    private String email;
    
    public AuthResponse(String token, String message, String name, String email) {
        this.token = token;
        this.message = message;
        this.name = name;
        this.email = email;
    }
}

