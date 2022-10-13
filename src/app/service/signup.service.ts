import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  

  constructor(
  public http:HttpClient
  ) { }

  salvar(dados:any){

    const httpOptions = {
      headers:new HttpHeaders({'Acess-Control-Allow-Origin' : '*'})
    };

    return this.http.post('/signup', dados, httpOptions);
  }

  listar(){
    return this.http.get
  }
}
