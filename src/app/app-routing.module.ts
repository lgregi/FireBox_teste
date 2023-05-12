import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './aut-guard.service';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { ListaEditarProdutosComponent } from './lista-editar-produtos/lista-editar-produtos.component';
import { LoginComponent } from './login/login.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produto', component: ProdutoComponent },
  {
    path: 'cadastrar-produto',
    component: CadastrarProdutoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario',
    component: PaginaUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'produtos/favoritos',
    component: FavoritosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'produtos/lista-produto',
    component: ListaEditarProdutosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'produtos/editar-produto',
    component: EditarProdutoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
