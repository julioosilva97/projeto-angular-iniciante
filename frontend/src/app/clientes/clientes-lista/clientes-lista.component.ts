import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = []

  cliente:Cliente = {
    nome : "",
    cpf : "",
    dataCadastro : ""
  }

  success: string | null = null

  error: string  | null = null

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {

    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  iniciarExclusao(cliente:Cliente){
    this.cliente = cliente;
  }

  excluir(){

    if(this.cliente.id) this.clienteService.excluir(this.cliente.id).subscribe(()=>{
      this.success = `Cliente ${this.cliente.nome} excluido com sucesso`;
      this.error = null;
      this.limparObjCliente();
      this.ngOnInit();
    },()=>{
      this.error = `Erro ao excluir cliente ${this.cliente.nome}`;
      this.success = null;
      this.limparObjCliente();
    })
  }

  limparObjCliente(){
    this.cliente.nome = "";
    this.cliente.cpf = "";
    this.cliente.dataCadastro = "";
  }

}
