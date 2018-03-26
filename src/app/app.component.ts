import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService]
})
export class AppComponent implements OnInit, DoCheck{
    public logueado;

    constructor(
        private _userService: UsuarioService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
      this._userService.home().subscribe(
          response =>{
            // console.log("respuesta",response)
          },
          err =>{
            this._router.navigate(['/error','2']);
          }
      )
    }

    ngOnInit(){
        this.logueado = this._userService.getIdentity();
    }

    ngDoCheck(){
        this.logueado = this._userService.getIdentity();
    }

    logout(){
        localStorage.clear();
        this.logueado = null;
        this._router.navigate(['/login']);
    }

    setMinimizar(){
      var mini = localStorage.getItem('minimizar');
      if(mini == "true")
        localStorage.setItem('minimizar',JSON.stringify(false))
      else
        localStorage.setItem('minimizar',JSON.stringify(true))
    }
}
