// Módulos necesarios para crear módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserRoutingModule } from './usuarios-routing';

// Componentes del módulo
import { MainUserComponent } from './main-user/main-user.component';
import { CrearUsuarioComponent } from './Usuario/crear-usuario.component';
import { VerUsuariosComponent } from './Usuario/ver-usuarios.component';
import { EditarUsuarioComponent } from './Usuario/editar-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    UserRoutingModule
  ],
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    VerUsuariosComponent,
    MainUserComponent
  ],
  exports: [MainUserComponent]
})
export class UsuariosModule { }
