import { ServicoPrestadoConsulta } from './servico-prestado-consulta.model';
import { ServicoPrestadoServiceService } from './../../servico-prestado-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome : string  = ""
  mes : number | null = null

  meses : number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  servicosPrestados : ServicoPrestadoConsulta[] = []

  message : string | null = null

  constructor(private servicoPrestadoService : ServicoPrestadoServiceService) { }

  ngOnInit(): void {
  }

  consultar(){
    this.servicosPrestados = []
    if(this.mes){
      this.servicoPrestadoService.buscar(this.nome,this.mes).subscribe(servicos =>{

        this.servicosPrestados = servicos

        this.message = servicos.length <= 0 ? "Nenhum serviço encontrado" : null

      })
    }else{
      this.message = "Selecione um mês" ;

    }
  }
}
