import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'cliente-form',
      component : ClienteFormComponent
    },
    {
      path:'cliente-form/:id',
      component : ClienteFormComponent
    },
    {
      path:'lista-clientes',
      component : ClientesListaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
