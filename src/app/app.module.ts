import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { AuthGuard } from './aut-guard.service';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ListaEditarProdutosComponent } from './lista-editar-produtos/lista-editar-produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { Favoritos } from './favoritos.service';
import { Autenticacao } from './autenticacao.service';
import { Produto } from './produtos.services';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CadastroComponent,
    FooterComponent,
    LoginComponent,
    ProdutoComponent,
    PaginaUsuarioComponent,
    CadastrarProdutoComponent,
    FavoritosComponent,
    ListaEditarProdutosComponent,
    EditarProdutoComponent,
    EditarUsuarioComponent,
    MeusProdutosComponent,
    EletronicosComponent,
    PesquisaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthGuard, Favoritos, Autenticacao, Produto],
  bootstrap: [AppComponent],
})
export class AppModule {}
