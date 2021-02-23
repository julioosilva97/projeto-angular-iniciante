package com.example.cursoangularspring.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.implementation.bind.annotation.Empty;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    @NotEmpty(message = "{campo.usuario.obrigatorio}")
    private String usuario;

    @Column
    @NotEmpty(message = "{campo.senha.obrigatorio}")
    private String senha;

}
