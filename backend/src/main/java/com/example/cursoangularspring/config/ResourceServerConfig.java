package com.example.cursoangularspring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {


    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/api/usuarios","/oauth/token").permitAll()
                .antMatchers("/api/clientes/**","/api/servicos-prestados/**").authenticated()
        .anyRequest().denyAll();
    }
}
