import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InfoComponent } from './info/info.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NoExisteComponent } from './no-existe/no-existe.component';



@NgModule({
  declarations: [
    InicioComponent,
    PerfilComponent,
    InfoComponent,
    AyudaComponent,
    NoExisteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AyudaComponent,
    InfoComponent,
    InicioComponent,
    NoExisteComponent,
    PerfilComponent
  ]
})
export class PaginasModule { }
