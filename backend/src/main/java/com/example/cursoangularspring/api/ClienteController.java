package com.example.cursoangularspring.api;

import com.example.cursoangularspring.model.entity.Cliente;
import com.example.cursoangularspring.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente salvar(@RequestBody  @Valid  Cliente cliente){
        return repository.save(cliente);
    }

    @GetMapping("{id}")
    public Cliente buscarPorId(@PathVariable Integer id){

        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Cliente excluir(@PathVariable Integer id){

        return repository
                .findById(id)
                .map( cliente -> {
                    repository.delete(cliente);
                    return cliente;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping
    public Cliente atualizar(@RequestBody @Valid Cliente cliente){
          Cliente clienteBusca = repository
                .findById(cliente.getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

          cliente.setDataCadastro(clienteBusca.getDataCadastro());
          return repository.save(cliente);

    }

    @GetMapping
    public List<Cliente> listar(){
        return repository.findAll();
    }


}
