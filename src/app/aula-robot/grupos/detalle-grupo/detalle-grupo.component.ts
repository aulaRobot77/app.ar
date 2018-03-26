import { Component } from '@angular/core';
import { fadeLeft } from '../../../animation';
import { Grupo } from '../../../modelos/grupo';
import { GrupoService } from '../../../servicios/grupo.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'detalle-grupo',
  templateUrl: './detalle-grupo.component.html',
  styleUrls: ['../grupos.css'],
  animations: [fadeLeft],
  providers: [GrupoService]
})
export class DetalleGrupoComponent{

  public grupo: Grupo;
  public id;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _grupoService: GrupoService
  ) {
    this.grupo = new Grupo("",0,0,0,"",[],[]);
    this.getGrupo();

  }


  getGrupo(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._grupoService.getGrupoCompleto(this.id).subscribe(
        result => {
          if(result.grupo){
            this.grupo = result.grupo;
            console.log(this.grupo)
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
}
