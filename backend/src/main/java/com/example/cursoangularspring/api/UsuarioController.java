package com.example.cursoangularspring.api;

import com.example.cursoangularspring.model.entity.Usuario;
import com.example.cursoangularspring.model.repository.UsuarioRepository;
import com.example.cursoangularspring.model.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Void> salvar(@RequestBody @Valid Usuario usuario){

        usuarioService.salvar(usuario);
        return new ResponseEntity<Void>(HttpStatus.CREATED);

    }
}
