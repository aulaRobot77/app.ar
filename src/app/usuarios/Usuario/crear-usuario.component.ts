import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UsuarioService} from '../../servicios/usuario.service';
import {Usuario} from '../../modelos/usuario';

@Component({
  selector: 'registrar-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class CrearUsuarioComponent {
  public titulo:string;
  public tiposRol:Array<string>;
  public usuario:Usuario;
  public usuarios:Array <Usuario>;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _usuarioService: UsuarioService
  ){
    this.titulo="Registrar Usuario";
    this.tiposRol=["Administrador","Instructor"];
    this.usuario = new Usuario("","","Seleccione","","","","","","");
    //this.usuarios=[];
  }

  onSubmit(){
    //this.usuarios=this._usuarioService.getAll();
    //verificar que no exista nombreUsuario
    //this.usuarios.includes(this.usuario);
    //if false
    //this._usuarioService.insert(this.usuario);

    //this.usuario=new Usuario("","","","","","","","","");
    this._router.navigate(['/main-panel/user-panel/verusuarios']);
    //else
    //alert error nombre de usuario repetido
  }
  contrasenasIguales(con2){
    return this.usuario.password===con2;
  }
  sinRol(val){
    return val==='Seleccione';
  }
}
