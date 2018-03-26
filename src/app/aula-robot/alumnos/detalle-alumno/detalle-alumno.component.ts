import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../modelos/alumno';
import { Router, ActivatedRoute} from '@angular/router';
import { AlumnoService } from '../../../servicios/alumno.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['../alumnos.css'],
  providers: [AlumnoService]
})
export class DetalleAlumnoComponent implements OnInit {

  public alumno: Alumno;
  public miniDatos: boolean;
  public miniPadres: boolean;
  public miniOtros: boolean;
  public miniAula: boolean;
  public id;
  public grupito;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService: AlumnoService
  ) {
    this.alumno = new Alumno("","","","","","","","","",[],"","","","","","","","",[],"","",[],"","");
    this.miniDatos = false;
    this.miniPadres = true;
    this.miniOtros = true;
    this.miniAula = true;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._alumnoService.getAlumno(this.id).subscribe(
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
  }
}
