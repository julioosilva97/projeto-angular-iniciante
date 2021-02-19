import { Usuario } from './usuario.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario : string = "";
  senha : string  = "";
  isErrorLogin: boolean = false
  isRegister : boolean = false
  isSuccessRegister : boolean = false
  errors: string[] = []



  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.usuario)
    console.log(this.senha)
  }

  iniciarCadastro(event:Event){
    event.preventDefault();
    this.isErrorLogin = false
    this.isRegister = true;
    this.errors = []
    this.isSuccessRegister = false;

  }

  cancelarCadastro(){
    this.isErrorLogin = false
    this.isRegister = false;
    this.usuario = "";
    this.senha = "";
    this.errors = []
  }

  cadastrar(){
    this.isErrorLogin = false
    const usuario:Usuario = {
      usuario : this.usuario ,
      senha :  this.senha
    }

    this.authService.salvar(usuario).subscribe(()=>{
      this.isRegister = false;
      this.isSuccessRegister = true;
      this.usuario = "";
      this.senha = "";
      this.errors = []
    },errorReesponse=>{
      this.isSuccessRegister = false;
      this.errors = errorReesponse.error.errors;
    });
  }

}
