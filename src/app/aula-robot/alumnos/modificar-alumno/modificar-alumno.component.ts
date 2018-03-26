import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../modelos/alumno';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AlumnoService } from '../../../servicios/alumno.service';
import { GrupoService } from '../../../servicios/grupo.service';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['../alumnos.css'],
  providers: [AlumnoService, GrupoService]
})
export class ModificarAlumnoComponent implements OnInit {

  public alumno: Alumno;
  public diaLibre; public dias; public horaILibre; public horaFLibre; public horas = [];
  public estadoNivel; public nombreNivel; public anioNivel; public estados = [];
  public anios = [];
  public niveles = ["Primeros Pasos", "Inicial", "Uno", "Dos", "Tres"];
  public miniDatos: boolean;
  public miniPadres: boolean;
  public miniOtros: boolean;
  public miniAula: boolean;
  public id;
  public grupos;
  public grupito;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService: AlumnoService,
    private _grupoService: GrupoService
  ) {
    this.miniDatos = false;
    this.miniPadres = true;
    this.miniOtros = true;
    this.miniAula = true;
    this.alumno = new Alumno("","","","","","","","","",[],"","","","","","","","",[],"","",[],"","");
    this.diaLibre=""; this.horaILibre=0; this.horaFLibre=0;
    this.dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    this.horas = [8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    this.estados = ['Completo','Incompleto', 'En curso']
    this.anios = Array.from(new Array(200), (x,i) => i + 2010);
    this.estadoNivel=""; this.nombreNivel=""; this.anioNivel="";
    this.cargarGrupos();
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._alumnoService.getAlumno(this.id).subscribe(
        result => {
          if(result.alumno){
            console.log(result);
            this.alumno = result.alumno;
            if(this.alumno.grupo)
              this.grupito = this.alumno.grupo._id;
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
  }

  editar(){
    if(this.alumno.grupo)
      this.alumno.grupo=this.grupito;
    this._alumnoService.editAlumno(this.id, this.alumno).subscribe(
      result => {
        if(result.alumno){
          this._router.navigate(['/main-panel/ver-alumnos'])
        }
        else{
          alert("Error al Editar el Alumno.");
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
  }

  addHorario(){
    this.alumno.horariosLibres.push({dia: this.diaLibre, horaI: this.horaILibre, horaF: this.horaFLibre});
    this.diaLibre="";
    this.horaILibre=0;
    this.horaFLibre=0;
  }

  borrarHorario(i){
    this.alumno.horariosLibres.splice(i,1);
  }

  verificaHoras(){
    return parseInt(this.horaILibre) >= parseInt(this.horaFLibre) && this.horaILibre != 0 && this.horaFLibre != 0;
  }

  verificarHorario(){
    return this.diaLibre == "" || this.verificaHoras() || this.horaILibre == 0 || this.horaFLibre == 0;
  }

  addNivel(){
    if(this.estadoNivel == "En curso" && this.alumno.niveles.find((element) => { return element.estado=="En curso"; })){
      alert('Ya existe un nivel "En curso", por favor intente con otro valor o actualice el estado de los cursos restantes.');
    }
    else{
      this.alumno.niveles.push({nivel: this.nombreNivel, estado: this.estadoNivel, anio: this.anioNivel});
      this.estadoNivel=""; this.nombreNivel=""; this.anioNivel="";
      this.alumno.niveles.sort(function(obj1, obj2) {
        if (obj1.anio > obj2.anio) { return 1; }
        if (obj1.anio < obj2.anio) { return -1; }
         return 0;
      });
    }
  }

  verificaNivel(){
    return this.estadoNivel == "" || this.nombreNivel == "" || this.anioNivel == "";
  }

  borrarNivel(i){
    this.alumno.niveles.splice(i,1);
  }

  cargarGrupos(){
    this._grupoService.getListaGrupos().subscribe(
        result =>{
          if(result)
            this.grupos = result.grupos;
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
}
