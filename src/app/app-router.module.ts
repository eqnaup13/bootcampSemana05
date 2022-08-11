import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { InfoComponent } from './paginas/info/info.component';
import { AyudaComponent } from './paginas/ayuda/ayuda.component';
import { NoExisteComponent } from './paginas/no-existe/no-existe.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'ayuda',
    component: AyudaComponent,
  },
  {
    path: '**',
    component: NoExisteComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
