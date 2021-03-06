import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'receitas', loadChildren: './receitas/receitas.module#ReceitasPageModule' },
  { path: 'saude', loadChildren: './saude/saude.module#SaudePageModule' },
  { path: 'entretenimento', loadChildren: './entretenimento/entretenimento.module#EntretenimentoPageModule' },
  { path: 'tecnologia', loadChildren: './tecnologia/tecnologia.module#TecnologiaPageModule' },  { path: 'limpeza', loadChildren: './limpeza/limpeza.module#LimpezaPageModule' },
  { path: 'jogos', loadChildren: './jogos/jogos.module#JogosPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
