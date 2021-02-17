package com.example.cursoangularspring.api;

import com.example.cursoangularspring.api.dto.ServicoPrestadoDTO;
import com.example.cursoangularspring.model.entity.Cliente;
import com.example.cursoangularspring.model.entity.ServicoPrestado;
import com.example.cursoangularspring.model.repository.ClienteRepository;
import com.example.cursoangularspring.model.repository.ServicoPrestadoRepository;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ServicoPrestadoRepository servicoPrestadoRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoPrestado salvar(@RequestBody @Valid ServicoPrestadoDTO servicoPrestadoDTO){

        var format = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate data = LocalDate.parse(servicoPrestadoDTO.getData(),format);

        Cliente cliente = clienteRepository.findById(servicoPrestadoDTO.getIdCliente())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente não encontrado"));

        ServicoPrestado servicoPrestado = new ServicoPrestado();
        servicoPrestado.setDescricao(servicoPrestadoDTO.getDescricao());
        servicoPrestado.setData(data);
        servicoPrestado.setCliente(cliente);
        servicoPrestado.setValor(converterStringParaBigDecimal(servicoPrestadoDTO.getValor()));


        return  servicoPrestadoRepository.save(servicoPrestado);
    }

    @GetMapping
    public List<ServicoPrestado> pesquisar(
            @RequestParam(value = "nome",required = false,defaultValue = "") String nome,
            @RequestParam(value = "mes",required = false) String mes
            ){

        return servicoPrestadoRepository.findByNomeClienteAndMes("%"+nome+"%",mes);
    }

    private BigDecimal converterStringParaBigDecimal(String valor){
        if(valor == null) return null;

        valor = valor.replace(".","").replace(",",".");

        try{
            return new BigDecimal(valor);
        }catch (Exception e){
            return  null;
        }
    }
}
