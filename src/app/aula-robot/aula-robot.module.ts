import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AulaRobotRoutingModule} from './aula-robot-routing';

import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { BuscarAlumnoComponent } from './alumnos/buscar-alumno/buscar-alumno.component';
import { ModificarAlumnoComponent } from './alumnos/modificar-alumno/modificar-alumno.component';
//import { EliminarAlumnoComponent } from './alumnos/eliminar-alumno/eliminar-alumno.component';
import { ParteDiarioComponent} from './parte_diario/nuevo_parte_diario/parte_diario.component';
import { VerPartesComponent} from './parte_diario/ver-partes/ver-partes.component';
import { VerParteComponent} from './parte_diario/ver-parte/ver-parte.component';
import { EditarParteComponent} from './parte_diario/editar-parte/editar-parte.component';
import { AsistenciaAnualComponent } from './asistencia-anual/asistencia-anual.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { ReservaVacanteComponent } from './pagos/reserva-vacante/reserva-vacante.component';
import { PagoMensualComponent } from './pagos/pago-mensual/pago-mensual.component';
import { BuscarPipe } from '../pipes/buscar.pipe';
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';
import { CrearGrupoComponent } from './grupos/crear-grupo/crear-grupo.component';
import { EditarGrupoComponent } from './grupos/editar-grupo/editar-grupo.component';
import { BuscarGrupoComponent } from './grupos/buscar-grupo/buscar-grupo.component';
import { DetalleGrupoComponent } from './grupos/detalle-grupo/detalle-grupo.component';
import { CrearReciboComponent } from './pagos/recibos/crear-recibo/crear-recibo.component';
import { EditarReciboComponent } from './pagos/recibos/editar-recibo/editar-recibo.component';

@NgModule({
  declarations: [
    PanelPrincipalComponent,
    ParteDiarioComponent,
    VerPartesComponent,
    VerParteComponent,
    EditarParteComponent,
    AsistenciaAnualComponent,
    RecuperacionComponent,
    ReservaVacanteComponent,
    BienvenidaComponent,
    CrearAlumnoComponent,
    BuscarAlumnoComponent,
    ModificarAlumnoComponent,
    PagoMensualComponent,
    BuscarPipe,
    DetalleAlumnoComponent,
    CrearGrupoComponent,
    EditarGrupoComponent,
    BuscarGrupoComponent,
    DetalleGrupoComponent,
    CrearReciboComponent,
    EditarReciboComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AulaRobotRoutingModule
  ],
  exports: [
    PanelPrincipalComponent
  ]
})
export class AulaRobotModule { }
