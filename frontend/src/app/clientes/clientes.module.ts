import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';



@NgModule({
  declarations: [ClienteFormComponent, ClientesListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports : [
    ClienteFormComponent
  ]
})
export class ClientesModule { }
