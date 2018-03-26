import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UsuarioService} from '../../servicios/usuario.service';
import {Usuario} from '../../modelos/usuario';

@Component({
  selector: 'editar-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class EditarUsuarioComponent {
  public titulo:string;
  public tiposRol:Array<string>;
  public usuario:Usuario;
  public usuarios:Array <Usuario>;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _usuarioService: UsuarioService
  ){
    this.titulo ="Modificar Usuario";
    this.tiposRol=["Administrador","Instructor"];
    this.usuario = new Usuario("","","","","","","","","");
    this.usuarios=this._usuarioService.getAll();
    //pos=this.usuarios.indexOf(param);
    //this.usuario=this.usuarios[pos];
    //this.usuarios.splice(pos,1);
  }
  ngOnInit(){
    //tomar parametro y buscar usuario poner en this.usuario
  }
  onSubmit(){
    
    this.usuarios.includes(this.usuario);
    //if false
    //this._usuarioService.delete(pos);
    //this._usuarioService.insert(this.usuario);
    // actualizar con PUT
    this.usuario=new Usuario("","","","","","","","","");
    this._router.navigate(['/main-panel/user-panel/verusuarios']);
    //else
    //alert error nombre de usuario repetido
  }
  contrasenasIguales(con2){
    return this.usuario.password===con2;
  }
}
