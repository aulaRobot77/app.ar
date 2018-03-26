import { Component, OnInit, DoCheck } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css'],
  providers: [UsuarioService]
})
export class PanelPrincipalComponent implements OnInit, DoCheck{
  public minimizar;

  constructor(
    private _userService: UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._userService.home().subscribe(
        response =>{
          if(!localStorage.getItem('minimizar')){
              localStorage.setItem('minimizar', JSON.stringify(false));
          }
          this.minimizar = localStorage.getItem('minimizar');
        },
        err =>{
          this._router.navigate(['/error','2']);
        }
    )

  }

  ngOnInit(){
    if(!this._userService.getIdentity()){
      console.log(this._userService.getIdentity());
      this._router.navigate(['/login']);
    }
  }

  ngDoCheck(){
    if(!this._userService.getIdentity()){
      console.log(this._userService.getIdentity());
      this._router.navigate(['/login']);
      this.minimizar = localStorage.getItem('minimizar');
    }
  }


}
