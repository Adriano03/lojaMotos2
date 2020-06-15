import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMarcaComponent } from './cadastro-marca/cadastro-marca.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EdicaoMarcaComponent } from './edicao-marca/edicao-marca.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CadastroCorComponent } from './cadastro-cor/cadastro-cor.component';
import { EdicaoProdutoComponent } from './edicao-produto/edicao-produto.component';
import { EdicaoCategoriaComponent } from './edicao-categoria/edicao-categoria.component';
import { EdicaoCorComponent } from './edicao-cor/edicao-cor.component';
import { EdicaoListaImagemProdutoComponent } from './edicao-lista-imagem-produto/edicao-lista-imagem-produto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path: 'usuario/cadastro', component: CadastroUsuarioComponent},
  {path: 'marcas/cadastro', component: CadastroMarcaComponent},
  {path: 'produtos/cadastro', component: CadastroProdutoComponent},
  {path: 'categoria/cadastro', component: CadastroCategoriaComponent},
  {path: 'cores/cadastro', component: CadastroCorComponent},

  {path: 'produtos/:id/edicao', component: EdicaoProdutoComponent},
  {path: 'marcas/:id/edicao', component: EdicaoMarcaComponent},
  {path: 'categorias/:id/edicao', component: EdicaoCategoriaComponent},
  {path: 'cores/:id/edicao', component: EdicaoCorComponent},

  {path: 'produtos/:id/edicao/imagens', component: EdicaoListaImagemProdutoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
