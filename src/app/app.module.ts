import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CursosonlineComponent } from './cursosonline/cursosonline.component';
import { OrientacaoComponent } from './orientacao/orientacao.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { SignupComponent } from './signup/signup.component';
import { ResetsenhaComponent } from './resetsenha/resetsenha.component';
import { ParceriasComponent } from './parcerias/parcerias.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgendarservicosComponent } from './agendarservicos/agendarservicos.component';
import { NegociosComponent } from './negocios/negocios.component';
import { SaibamaisComponent } from './saibamais/saibamais.component';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CursosonlineComponent,
    OrientacaoComponent,
    QuemsomosComponent,
    SignupComponent,
    ResetsenhaComponent,
    ParceriasComponent,
    SucessoComponent,
    AgendarservicosComponent,
    NegociosComponent,
    SaibamaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,

  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
