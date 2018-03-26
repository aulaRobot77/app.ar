import { Component } from '@angular/core';
import {ParteDiario} from '../../../modelos/parte_diario';
import {Alumno} from '../../../modelos/alumno';
import {Asistencia} from '../../../modelos/asistencia';

@Component({
  selector: 'editar-diario',
  templateUrl: './editar-parte.component.html',
  styleUrls: ['./editar-parte.component.css']
})

export class EditarParteComponent {
  public parte_diario:ParteDiario;
  public partes:Array<ParteDiario>;
  public grupos:Array<string>;
  public todosInstructores:Array<string>;

  constructor(){
    this.parte_diario = new ParteDiario([],"","","");
    this.partes=[];
    this.grupos = ["Grupo Lunes","GrupoMartes","GrupoMiercoles","GrupoJueves","GrupoViernes"];
    this.todosInstructores = ["Instructor numero 1","Instructor numero 2","Instructor numero 3"];
     //acá debería tomar los de la BD- del servicio
  }
  onSubmit(){
    console.log(this.parte_diario);
    this.partes.push(this.parte_diario);// Debe guardar el parte en la BD

    //this.parte_diario=new ParteDiario("","","","",[new Alumno("Pepe", "Perez","222"), new Alumno("Pa", "Ra","333"), new Alumno("Ma", "Jo","444")],[new Alumno("Recu", "Salazar","555")]); // se usa para limpiar la variable
  }
  elegirAlumno(alumno){
    this.parte_diario.listado_recuperan.push(new Asistencia(new Alumno(alumno, alumno,alumno,"","","","","","",[],"","","","","","","","",[],"","",[],"",""),""));
  }
  eliminar_recuperan(indice){
    this.parte_diario.listado_recuperan.splice(indice,1);
  }
}
