import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes del módulo
import { MainUserComponent } from './main-user/main-user.component';
import { CrearUsuarioComponent } from './Usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './Usuario/editar-usuario.component';
import { VerUsuariosComponent } from './Usuario/ver-usuarios.component';

const usersRoutes: Routes = [
  {
    path: 'user-panel',
    component: MainUserComponent,
    children:[
      { path: '', redirectTo:'verusuarios', pathMatch:'full'}

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {}
