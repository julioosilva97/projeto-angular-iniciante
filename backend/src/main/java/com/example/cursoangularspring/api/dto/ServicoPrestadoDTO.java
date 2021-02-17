package com.example.cursoangularspring.api.dto;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {


    private Integer id;

    @NotEmpty(message = "{campo.nome.obrigatorio}")
    private String descricao;

    @NotNull(message = "{campo.idcliente.obrigatorio}")
    private Integer idCliente;

    @NotEmpty(message = "{campo.valor.obrigatorio}")
    private String valor;

    @NotEmpty(message = "{campo.data.obrigatorio}")
    private String data;
}
