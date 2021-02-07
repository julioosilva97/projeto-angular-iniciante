package com.example.cursoangularspring.model.repository;

import com.example.cursoangularspring.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
