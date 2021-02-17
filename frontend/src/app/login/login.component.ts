import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario : string | null = null
  senha : string | null = null
  isErrorLogin: boolean = false
  isRegister : boolean = false


  constructor() { }

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
  }

  cancelarCadastro(){
    this.isErrorLogin = false
    this.isRegister = false;
    this.usuario = null;
    this.senha = null;
  }

  cadastrar(){
    this.isErrorLogin = false
    console.log(this.usuario)
    console.log(this.senha)
  }

}
