import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMarcaComponent } from './cadastro-marca/cadastro-marca.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EdicaoMarcaComponent } from './edicao-marca/edicao-marca.component';


const routes: Routes = [
  
  {path: 'marcas/cadastro', component: CadastroMarcaComponent},
  {path: 'marcas/:id/edicao', component: EdicaoMarcaComponent},
  {path: 'produtos/cadastro', component: CadastroProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
