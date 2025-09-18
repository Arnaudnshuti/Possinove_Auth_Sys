package UserAuthenticationSystem.UserAunthentication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class UserAunthenticationApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserAunthenticationApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("https://possinove-auth-sys-h8i5.vercel.app")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}
