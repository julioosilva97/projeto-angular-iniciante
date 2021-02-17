import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = {
    nome: "",
    cpf: "",
    dataCadastro: ""
  }

  success: boolean = false

  errors: string[] = []

  constructor(private service: ClientesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.route.snapshot.params;
    if (params.id) {
      const id = +params.id;
      this.service.buscarPorId(id).subscribe(cliente => {
        this.cliente = cliente;
      })
    }
  }

  onSubmit(): void {

    if (this.cliente.id) {
      this.service.atualizar(this.cliente).subscribe(cliente => {
        console.log(cliente)
        this.success = true
        this.errors = []
        this.cliente = cliente
      }, errorReesponse => {
        this.success = false
        this.errors = errorReesponse.error.errors;
      }
      )
    } else {
      this.service.salvar(this.cliente).subscribe(cliente => {
        console.log(cliente)
        this.success = true
        this.errors = []
        this.cliente = cliente
      }, errorReesponse => {
        this.success = false
        this.errors = errorReesponse.error.errors;
      }
      )
    }
  }
}
