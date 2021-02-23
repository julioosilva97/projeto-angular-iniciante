package com.example.cursoangularspring.api.excpetion;


public class NegocioException extends RuntimeException {

    public NegocioException(String usuario) {
        super("Usuário já cadastrado com o login: "+usuario);
    }
}
