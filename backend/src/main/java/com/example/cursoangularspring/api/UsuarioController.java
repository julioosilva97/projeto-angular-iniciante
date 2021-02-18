package com.example.cursoangularspring.api;

import com.example.cursoangularspring.model.entity.Usuario;
import com.example.cursoangularspring.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void  salvar(@RequestBody @Valid Usuario usuario){

        usuarioRepository.save(usuario);
    }
}
