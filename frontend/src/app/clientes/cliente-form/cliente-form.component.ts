import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {


  cliente : Cliente = {
    nome : "",
    cpf : "",
    dataCadastro : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.cliente);
  }

}
