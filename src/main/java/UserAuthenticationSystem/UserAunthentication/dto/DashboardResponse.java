package UserAuthenticationSystem.UserAunthentication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {
    
    private String message;
    private String name;
    private String email;
}

