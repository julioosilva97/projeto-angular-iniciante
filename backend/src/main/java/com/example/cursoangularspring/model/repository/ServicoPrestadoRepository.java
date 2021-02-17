package com.example.cursoangularspring.model.repository;

import com.example.cursoangularspring.model.entity.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {


    @Query(value = "select s.* from SERVICO_PRESTADO  s inner join cliente c on c.id = s.id_cliente " +
            "where upper( c.nome ) like upper( :nome ) and MONTH( s.data ) = :mes",nativeQuery = true)
    List<ServicoPrestado> findByNomeClienteAndMes(
            @Param("nome") String nome,
            @Param("mes") String mes
    );
}
