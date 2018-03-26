import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../modelos/alumno';
import { Router, ActivatedRoute} from '@angular/router';
import { AlumnoService } from '../../../servicios/alumno.service';
import { GrupoService } from '../../../servicios/grupo.service';
import { fadeLeft } from '../../../animation';

@Component({
  selector: 'crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['../alumnos.css'],
  providers: [AlumnoService, GrupoService],
  animations: [fadeLeft]
})
export class CrearAlumnoComponent implements OnInit {
  public alumno: Alumno;
  public diaLibre; public dias; public horaILibre; public horaFLibre; public horas = [];
  public estadoNivel; public nombreNivel; public anioNivel; public estados = [];
  public anios = [];
  public niveles = ["Primeros Pasos", "Inicial", "Uno", "Dos", "Tres"];
  public editando;
  public grupos;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService: AlumnoService,
    private _grupoService: GrupoService
  ) {
    this.alumno = new Alumno("","","","","","","","","",[],"","","","","","","","",[],"","",[],"","");
    this.diaLibre=""; this.horaILibre=0; this.horaFLibre=0;
    this.dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    this.horas = [8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    this.estados = ['Completo','Incompleto', 'En curso']
    this.anios = Array.from(new Array(200), (x,i) => i + 2010);
    this.estadoNivel = ""; this.nombreNivel=""; this.anioNivel="";
    this.editando = -1;
    this.cargarGrupos();
  }

  ngOnInit() {
  }

  crear(){
    this._alumnoService.crearAlumno(this.alumno).subscribe(
      result => {
        console.log(result);
        if(result.alumno){
          this._router.navigate(['/main-panel/ver-alumnos']);
        }
      },
      err => {
        //Verifica si el error es por token expirado.
          if(err.status == 404){
            localStorage.clear();
            this._router.navigate(['/error',1])
          }
          else{
            //Verifica que no se cargue un alumno duplicado
            if(err.status == 500)
              alert("Ya existe un alumno con el DNI indicado.")
            else{
              this._router.navigate(['/error',2])
            }
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
      alert('Ya existe un nivel "En curso", por favor intente con otro valor o actualice el estado de los cursos existentes.');
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

  cargaEditar(i){
    this.estadoNivel = this.alumno.niveles[i].estado;
    this.nombreNivel = this.alumno.niveles[i].nivel;
    this.anioNivel = this.alumno.niveles[i].anio;
    this.editando = i;
  }

  editarNivel(){
    if(this.estadoNivel == "En curso" && this.alumno.niveles.find((element) => { return element.estado=="En curso"; })){
      alert('Ya existe un nivel "En curso", por favor intente con otro valor o actualice el estado de los cursos existentes.');
    }
    else{
      this.alumno.niveles[this.editando].estado = this.estadoNivel;
      this.alumno.niveles[this.editando].nivel = this.nombreNivel;
      this.alumno.niveles[this.editando].anio = this.anioNivel;
      this.estadoNivel=""; this.nombreNivel=""; this.anioNivel="";
      this.editando = -1;
      this.alumno.niveles.sort(function(obj1, obj2) {
        if (obj1.anio > obj2.anio) { return 1; }
        if (obj1.anio < obj2.anio) { return -1; }
         return 0;
      });
    }
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
