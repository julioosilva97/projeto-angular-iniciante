import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { ServicoPrestadoServiceService } from './servico-prestado-service.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClientesModule } from './clientes/clientes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesService } from './clientes.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoServiceService,
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
