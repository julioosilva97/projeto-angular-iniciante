import { ServicoPrestadoServiceService } from './../../servico-prestado-service.service';
import { ServicoPrestado } from './../servicoprestado.model';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes : Cliente[] = [];
  servicoPrestado : ServicoPrestado = {
    descricao : "",
    data : "",
    idCliente : null,
    valor : ""
  }

  success: boolean = false;

  errors: string[] = [];

  constructor(private clienteService : ClientesService,
    private servicoPrestadoService : ServicoPrestadoServiceService) {}

  ngOnInit(): void {

    this.clienteService.listar().subscribe(clientes => this.clientes = clientes);

  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servicoPrestado).subscribe(() => {

      this.success = true
      this.errors = []
      this.servicoPrestado = {
        descricao : "",
        data : "",
        idCliente : null,
        valor : ""
      }
    }, errorReesponse => {
      this.success = false
      this.errors = errorReesponse.error.errors;
    });
  }

}
