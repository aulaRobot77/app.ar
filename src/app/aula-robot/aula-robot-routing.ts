import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes del módulo
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { ParteDiarioComponent } from './parte_diario/nuevo_parte_diario/parte_diario.component';
import { VerPartesComponent } from './parte_diario/ver-partes/ver-partes.component';
import { VerParteComponent } from './parte_diario/ver-parte/ver-parte.component';
import { EditarParteComponent } from './parte_diario/editar-parte/editar-parte.component';
import { PagoMensualComponent } from './pagos/pago-mensual/pago-mensual.component';
import { AsistenciaAnualComponent } from './asistencia-anual/asistencia-anual.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { ReservaVacanteComponent } from './pagos/reserva-vacante/reserva-vacante.component';
import { CrearReciboComponent } from './pagos/recibos/crear-recibo/crear-recibo.component';
import { EditarReciboComponent } from './pagos/recibos/editar-recibo/editar-recibo.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { BuscarAlumnoComponent } from './alumnos/buscar-alumno/buscar-alumno.component';
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';
import { ModificarAlumnoComponent } from './alumnos/modificar-alumno/modificar-alumno.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MainUserComponent } from '../usuarios/main-user/main-user.component';
import { CrearUsuarioComponent } from '../usuarios/Usuario/crear-usuario.component';
import { EditarUsuarioComponent } from '../usuarios/Usuario/editar-usuario.component';
import { VerUsuariosComponent } from '../usuarios/Usuario/ver-usuarios.component';
import { CrearGrupoComponent } from './grupos/crear-grupo/crear-grupo.component';
import { EditarGrupoComponent } from './grupos/editar-grupo/editar-grupo.component';
import { BuscarGrupoComponent } from './grupos/buscar-grupo/buscar-grupo.component';
import { DetalleGrupoComponent } from './grupos/detalle-grupo/detalle-grupo.component';


const aulaRobotRoutes: Routes = [
  {
    path: 'main-panel', component: PanelPrincipalComponent,
    children:[
      {path: '', redirectTo:'bienvenida', pathMatch:'full'},
      {path: 'bienvenida', component: BienvenidaComponent},
      {path: 'crear-alumno', component: CrearAlumnoComponent},
      {path: 'ver-alumnos', component: BuscarAlumnoComponent},
      {path: 'detalle-alumno/:id', component: DetalleAlumnoComponent},
      {path: 'editar-alumno/:id', component: ModificarAlumnoComponent},
      {path: 'crear-grupo', component: CrearGrupoComponent},
      {path: 'ver-grupos', component: BuscarGrupoComponent},
      {path: 'detalle-grupo/:id', component: DetalleGrupoComponent},
      {path: 'editar-grupo/:id', component: EditarGrupoComponent},
      {path: 'parte_diario', component: ParteDiarioComponent},
      {path: 'ver-partes', component: VerPartesComponent},
      {path: 'ver-parte', component: VerParteComponent},
      {path: 'editar-parte', component: EditarParteComponent},
      {path: 'asistencia', component: AsistenciaAnualComponent},
      {path: 'recuperacion', component: RecuperacionComponent},
      {path: 'pago-mensual', component: PagoMensualComponent},
      {path: 'reserva-vacante', component: ReservaVacanteComponent},
      {path: 'crear-recibo', component: CrearReciboComponent},
      {path: 'editar-recibo', component: EditarReciboComponent},
      {
        path: 'user-panel',
        component: MainUserComponent,
        children:[
          { path: 'verusuarios', component: VerUsuariosComponent },
          { path: 'editarusuario/:nombreUsuario', component: EditarUsuarioComponent },
          { path: 'crearusuario', component: CrearUsuarioComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aulaRobotRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AulaRobotRoutingModule {}
