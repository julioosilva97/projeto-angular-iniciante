import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'servicos-prestados',
    canActivate:[AuthGuard],
    component : LayoutComponent,
    children : [
      {
        path: 'form',
        component: ServicoPrestadoFormComponent
      },
      {
        path: 'listagem',
        component: ServicoPrestadoListaComponent
      },
      {
        path:'', redirectTo:"/servicos-prestados/listagem", pathMatch : 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
