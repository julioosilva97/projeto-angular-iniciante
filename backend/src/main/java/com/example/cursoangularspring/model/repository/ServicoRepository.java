package com.example.cursoangularspring.model.repository;

import com.example.cursoangularspring.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
