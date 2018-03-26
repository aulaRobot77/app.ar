import { Component } from '@angular/core';
import {AsistenciaAnual} from '../../modelos/asistencia-anual';
import {TablaAsistencia} from '../../modelos/tabla-asistencia';
import {ParteDiario} from '../../modelos/parte_diario';
import {Asistencia} from '../../modelos/asistencia';
import { Alumno } from '../../modelos/alumno';

@Component({
  selector: 'asistencia-anual',
  templateUrl: './asistencia-anual.component.html',
  styleUrls: ['./asistencia-anual.component.css']
})

export class AsistenciaAnualComponent {
  public asistencia:AsistenciaAnual;
//  public tabla:TablaAsistencia;
  public fechasClases:Array<string>;
  public partes:Array<ParteDiario>;

  constructor(){
    this.partes=[new ParteDiario(["Instructor numero 1"],"26/02/2018","Grupo Lunes","18:00"),new ParteDiario(["Instructor numero 2"],"05/03/2018","Grupo Lunes","18:00"),new ParteDiario(["Instructor numero 3"],"26/02/2018","Grupo Martes","18:00")];
    //this.partes=[new ParteDiario("instructor","12/03","miercoles","16",[new Asistencia(new Alumno("Pepe", "Perez","222","","","","","","",[],"","","","","","","","",[],"","",[],""), "p"), new Asistencia(new Alumno("Juan", "Osvaldo","333","","","","","","",[],"","","","","","","","",[],"","",[],""),"a/c"), new Asistencia(new Alumno("Ma", "Jo","444","","","","","","",[],"","","","","","","","",[],"","",[],""),"p")],[]), new ParteDiario("intrutoraso","19/03","miercoles","16",[new Asistencia(new Alumno("Pepe", "Perez","222","","","","","","",[],"","","","","","","","",[],"","",[],""), "p"), new Asistencia(new Alumno("Juan", "Osvaldo","333","","","","","","",[],"","","","","","","","",[],"","",[],""),"a/s"), new Asistencia(new Alumno("Ma", "Jo","444","","","","","","",[],"","","","","","","","",[],"","",[],""),"a/c")],[]), new ParteDiario("intrutor","26/03","miercoles","16",[new Asistencia(new Alumno("Pepe", "Perez","222","","","","","","",[],"","","","","","","","",[],"","",[],""), "p"), new Asistencia(new Alumno("Juan", "Osvaldo","333","","","","","","",[],"","","","","","","","",[],"","",[],""),"p"), new Asistencia(new Alumno("Ma", "Jo","444","","","","","","",[],"","","","","","","","",[],"","",[],""),"p")],[]), new ParteDiario("intrutoraso","02/04","miercoles","16",[new Asistencia(new Alumno("Pepe", "Perez","222","","","","","","",[],"","","","","","","","",[],"","",[],""), "p/m"), new Asistencia(new Alumno("Juan", "Osvaldo","333","","","","","","",[],"","","","","","","","",[],"","",[],""),"p"), new Asistencia(new Alumno("Ma", "Jo","444","","","","","","",[],"","","","","","","","",[],"","",[],""),"a/s")],[])];
    this.asistencia=new AsistenciaAnual("Lunes 16hs","Don Juan",[new TablaAsistencia("juan",["12/03","19/03"]),new TablaAsistencia("pedro",["12/03","19/03"]),new TablaAsistencia("nacho",["12/03","26/03"]),new TablaAsistencia("pablo",["19/03","26/03"])]);//new TablaAsistencia("",[]));
    //this.arreglo=[];
  }
  ngOnInit(){
    //this.fechasClases=["12/03","19/03","26/03","03/04"];
  }
  onSubmit(){
    //this.arreglo.push(this.asistencia);
    //this.asistencia=new AsistenciaAnual("","");
  }
}
