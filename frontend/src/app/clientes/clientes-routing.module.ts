import { LayoutComponent } from './../layout/layout.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:"clientes",component: LayoutComponent, children : [
        {
          path:'form',
          component : ClienteFormComponent
        },
        {
          path:'form/:id',
          component : ClienteFormComponent
        },
        {
          path:'lista',
          component : ClientesListaComponent
        },
        {
          path:'',
          redirectTo:'/clientes/lista',
          pathMatch:'full'
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
