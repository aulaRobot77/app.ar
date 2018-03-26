import { Component } from '@angular/core';
import {ParteDiario} from '../../../modelos/parte_diario';
import {Alumno} from '../../../modelos/alumno';
import {Asistencia} from '../../../modelos/asistencia';

@Component({
  selector: 'ver-diario',
  templateUrl: './ver-partes.component.html',
  styleUrls: ['./ver-partes.component.css']
})

export class VerPartesComponent {
  public parte_diario:ParteDiario;
  public partes:Array<ParteDiario>;

  constructor(){
    this.partes = [new ParteDiario(["Instructor numero 1"],"26/02/2018","Grupo Lunes","18:00"),new ParteDiario(["Instructor numero 2"],"","Grupo GrupoMartes","16:00"),new ParteDiario(["Instructor numero 1"],"","GrupoJueves","18:00")];
  }
}
