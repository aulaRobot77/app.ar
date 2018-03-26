import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { FormControl, FormControlDirective, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

const NICKNAME_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]/;
const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

@Component({
   selector: 'login',
   templateUrl: 'login.component.html',
   styleUrls: ['./login.component.css'],
   providers: [UsuarioService]
})

export class LoginComponent {
    public user: Usuario;
    public identity: any;
    public token;
    public status: String;
    public nicknameFC = new FormControl('', [Validators.required, Validators.pattern(NICKNAME_REGEX)]);
    public passFC = new FormControl('', [Validators.required, Validators.pattern(PASS_REGEX)]);
    public errorLogin = false;

    constructor(
        private _userService: UsuarioService,
        private _route: ActivatedRoute,
        private _router: Router
      ) {
            this.user = new Usuario("","","","","","","","","");
        }

    ngOnInit(){
      if(this._userService.getIdentity())
        this._router.navigate(['/main-panel']);
    }

    login() {
      this.errorLogin = false;
      this._userService.login(this.user).subscribe(
        response =>{
          this.identity = response.user;
          if(!this.identity || !this.identity._id){
            alert("El usuario no se ha logueado correctamente.")
          }
          else{
            console.log(this.identity);
            this._userService.login(this.user,'true').subscribe(
              response =>{
                console.log('respuesta',response);
                this.token = response.token;

                if(this.token.length <= 0){
                  alert("El token no se ha generado")
                }
                else{
                  this.status = "success"
                  localStorage.setItem('identity', JSON.stringify(this.identity));
                  localStorage.setItem('token', JSON.stringify(this.token));
                  this._router.navigate(['/main-panel']);
                }
              },
              error =>{
                console.log(<any>error);
              }
            )
          }
        },
        error =>{
          this.errorLogin = true;
        }
      );
    }
}
