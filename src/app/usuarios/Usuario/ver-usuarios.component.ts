import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UsuarioService} from '../../servicios/usuario.service';
import {Usuario} from '../../modelos/usuario';

@Component({
  selector: 'ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class VerUsuariosComponent {
  public titulo:string;
  public tiposRol:Array<string>;
  public usuario:Usuario;
  public usuarios:Array <Usuario>;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _usuarioService: UsuarioService
  ){
    this.titulo="Listado de Usuarios";
    this.tiposRol=["Administrador","Instructor"];
    this.usuario = new Usuario("","","","","","","","","");
    //this.usuarios=this._usuarioService.getAll();
    this.usuarios=[new Usuario("pepe","c","Administrador","","","","","",""),new Usuario("pepo","d","Instructor","","","","","",""),new Usuario("pupo","e","Administrador","","","","","","")];
  }
  ngOnInit(){

  }
  eliminarUsuario(pos){
    this.usuarios.splice(pos,1);
  }
}
