import { Component, OnInit} from '@angular/core';
import {ParteDiario} from '../../../modelos/parte_diario';
import {Alumno} from '../../../modelos/alumno';
import {Asistencia} from '../../../modelos/asistencia';

@Component({
  selector: 'ver-parte',
  templateUrl: './ver-parte.component.html',
  styleUrls: ['./ver-parte.component.css']
})

export class VerParteComponent{ //implements OnInit{
  public parte_diario:ParteDiario;
  public partes:Array<ParteDiario>;
  public grupos:Array<string>;
  public instructores:Array<string>;

  constructor(){
    this.parte_diario = new ParteDiario(["Instructor numero 1"],"26/02/2018","Grupo Lunes","18:00");
    this.partes=[];
    this.grupos = ["Grupo Lunes","GrupoMartes","GrupoMiercoles","GrupoJueves","GrupoViernes"];
    this.instructores = ["Instructor numero 1","Instructor numero 2","Instructor numero 3"];
     //acá debería tomar los de la BD- del servicio
  }
  /*ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._parteService.getAlumno(this.id).subscribe(
        result => {
          if(result.alumno){
            console.log("Entró acá",result.alumno);
            this.alumno = result.alumno;
          }
          else{
            alert("Error al buscar el Alumno");
            this._router.navigate(['/main-panel/ver-alumnos']);
          }
        },
        err => {
          //Verifica si el error es por token expirado.
            if(err.status == 401){
              localStorage.clear();
              this._router.navigate(['/error',1])
            }
            else{
              this._router.navigate(['/error',2])
            }
        });
      });
  }*/
  onSubmit(){
    console.log(this.parte_diario);
  }
  elegirAlumno(alumno){
    //this.parte_diario.listado_recuperan.push(new Asistencia(new Alumno(alumno, alumno,alumno,"","","","","","",[],"","","","","","","","",[],"","",[],""),""));
  }
  eliminar_recuperan(indice){
    //this.parte_diario.listado_recuperan.splice(indice,1);
  }
}
