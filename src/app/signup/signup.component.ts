import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public dados:any = {
    id:0,
    nome:'',
    email:'',
    senha:'',
  }

  public field_form = '';

  constructor(
    public signup_service:SignupService
  ) { }

  ngOnInit(): void {
    this.voltar();
  }
  
  criar(){
    if (this.dados.nome == ''){
      this.field_form = 'field-error';
      return;
    }
    this.signup_service.salvar(this.dados).subscribe(
      (response:any) => {
        this.dados.id = response;
      }
    );
  }
  voltar(){
    this.dados= {
      id:0,
      nome:'',
      email:'',
      senha:'',
    }
  
}
}
