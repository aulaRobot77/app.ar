import { Component } from '@angular/core';
import { fadeLeft } from '../../../animation';
import { Grupo } from '../../../modelos/grupo';
import { UsuarioService } from '../../../servicios/usuario.service';
import { GrupoService } from '../../../servicios/grupo.service';
import { AlumnoService } from '../../../servicios/alumno.service';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['../grupos.css'],
  animations: [fadeLeft],
  providers: [UsuarioService, GrupoService, AlumnoService]
})
export class EditarGrupoComponent{

  public grupo: Grupo;
  public dias;
  public horas;
  public anios;
  public instructores;
  public instructoresAux;
  public instructor;
  public alumnos;
  public alumnosAux;
  public alumno;
  public id;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _usuarioService: UsuarioService,
    private _alumnoService: AlumnoService,
    private _grupoService: GrupoService
  ) {
    this.grupo = new Grupo("",0,0,0,"",[],[]);
    this.dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    this.horas = [8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    this.anios = Array.from(new Array(100), (x,i) => i + 2015);
    this.instructor = "";
    this.instructoresAux = [];
    this.instructores = [];
    this.alumno = "";
    this.alumnosAux = [];
    this.alumnos = [];
    this.getGrupo();

  }

  addInstructor(){
    var i = parseInt(this.instructor);
    this.grupo.instructores.push(this.instructores[i]._id);
    this.instructoresAux.push(this.instructores[i]);
    this.instructores.splice(i,1);
    this.instructor = "";
  }

  borrarInstructor(i){
    this.instructores.push(this.instructoresAux[i]);
    this.grupo.instructores.splice(i,1);
    this.instructoresAux.splice(i,1);
  }

  addAlumno(){
    var i = parseInt(this.alumno);
    this.grupo.cursan.push(this.alumnos[i]._id);
    this.alumnosAux.push(this.alumnos[i]);
    this.alumnos.splice(i,1);
    this.alumno = "";
  }

  borrarAlumno(i){
    this.alumnos.push(this.alumnosAux[i]);
    this.grupo.cursan.splice(i,1);
    this.alumnosAux.splice(i,1);
  }

  getGrupo(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._grupoService.getGrupo(this.id).subscribe(
        result => {
          if(result.grupo){
            this.grupo = result.grupo;
            this.getInstructores();
            this.getAlumnos();
          }
          else{
            alert("Error al buscar el Grupo");
            this._router.navigate(['/main-panel/ver-grupos']);
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
  }
  getInstructores(){
    this._usuarioService.getInstructores().subscribe(
      response => {
        if(response.instructores){
          if(this.grupo.instructores.length != 0)
            this.diferencia(this.grupo.instructores, response.instructores, this.instructoresAux, this.instructores);
          else
            this.instructores = response.instructores;
        }
      },
      err => {
        //Verifica si el error es por token expirado.
          if(err.status == 404){
            localStorage.clear();
            this._router.navigate(['/error',1])
          }
          else{
            this._router.navigate(['/error',2])
          }
      });
  }

  getAlumnos(){
    this._alumnoService.getAlumnosInactivos().subscribe(
        response =>{
          if(response.alumnos){
            if(this.grupo.cursan.length != 0)
              this.diferencia(this.grupo.cursan, response.alumnos, this.alumnosAux, this.alumnos);
            else
              this.alumnos = response.alumnos;
          }
        },
        error =>{
          //Verifica si el error es por token expirado.
            if(error.status == 404){
              localStorage.clear();
              this._router.navigate(['/error',1])
            }
            else{
              this._router.navigate(['/error',2])
            }
        }
    );
  }

  editar(){
    this._grupoService.editGrupo(this.id,this.grupo).subscribe(
      result => {
        if(result.grupo){
          this._router.navigate(['/main-panel/ver-grupos']);
        }
        else
          alert("Error al Editar un nuevo alumno. Inténtelo más tarde.");
      },
      err => {
        //Verifica si el error es por token expirado.
          if(err.status == 404){
            localStorage.clear();
            this._router.navigate(['/error',1])
          }
          else{
            //Verifica que no se cargue un grupo duplicado
            if(err.status == 500)
              alert("Ya existe un grupo con el mismo nombre y año indicados.")
            else{
              this._router.navigate(['/error',2])
            }
          }
    });
  }

  /*
  *  Método para separar aquello alumnos/instructores que posee el grupo
  *  de aquellos que no, para que se muestren en los respectivos selects.
  */
  diferencia(arrayId, array, arraySi, arrayNo){
    var temp = []
    for(let i in array){
      if(arrayId.indexOf(array[i]._id) == -1)
        arrayNo.push(array[i])
      else
        arraySi.push(array[i])
    }
  }
}
