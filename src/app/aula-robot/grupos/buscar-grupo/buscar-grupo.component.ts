import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../../servicios/grupo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fadeLeft } from '../../../animation';

@Component({
  selector: 'buscar-grupo',
  templateUrl: './buscar-grupo.component.html',
  styleUrls: ['../grupos.css'],
  providers: [GrupoService],
  animations: [ fadeLeft]
})
export class BuscarGrupoComponent implements OnInit {

  public grupos;
  public busqueda;
  public tipo;
  public desc;
  public datoB;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _grupoService: GrupoService
  ) {
    this.grupos = [];
    this.tipo = "";
    this.desc = "";
    this.datoB = "all"
  }

  ngOnInit() {
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
      this.grupos.sort(function(obj1, obj2) {
        if (obj1[dato] > obj2[dato]) { return 1; }
        if (obj1[dato] < obj2[dato]) { return -1; }
         return 0;
      });
    }
    else{
      this.grupos.sort(function(obj1, obj2) {
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
