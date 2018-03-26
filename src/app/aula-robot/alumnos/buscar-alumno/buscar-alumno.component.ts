import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../servicios/alumno.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fadeLeft } from '../../../animation';

@Component({
  selector: 'app-buscar-alumno',
  templateUrl: './buscar-alumno.component.html',
  styleUrls: ['../alumnos.css'],
  providers: [AlumnoService],
  animations: [fadeLeft]
})
export class BuscarAlumnoComponent implements OnInit {

  public alumnos: Array<any>;
  public busqueda;
  public tipo;
  public desc;
  public datoB;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService : AlumnoService
  ) {
    this.alumnos = [];
    this.tipo = "";
    this.desc = "";
    this.datoB = "all"
  }

  ngOnInit() {
      this._alumnoService.getListaAlumnos().subscribe(
          result =>{
            if(result)
              this.alumnos = result.alumnos;
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

  ordenar(dato){
    if(this.tipo != dato){
      this.tipo = dato;
      this.desc = true;
    }
    else{
      if(this.desc){
        this.desc = false;
      }
      else{
        this.desc = true;
      }
    }
    if(this.desc){
      this.alumnos.sort(function(obj1, obj2) {
        if (obj1[dato] > obj2[dato]) { return 1; }
        if (obj1[dato] < obj2[dato]) { return -1; }
         return 0;
      });
    }
    else{
      this.alumnos.sort(function(obj1, obj2) {
        if (obj1[dato] > obj2[dato]) { return -1; }
        if (obj1[dato] < obj2[dato]) { return 1; }
         return 0;
      });
    }
  }

  eliminar(id){
    // alert("Alumno eliminado satisfactoriamente!")
  }
}
