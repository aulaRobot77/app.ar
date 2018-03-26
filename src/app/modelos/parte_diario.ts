import { Alumno } from './alumno';
import {Asistencia} from './asistencia';

export class ParteDiario {
  constructor(
    public instructores: string[],
    public fecha: string,
    public grupo: string,
    public horario: string,
    public listado_alumnos: Asistencia[] = [new Asistencia(new Alumno("Pepe", "Perez","222","","","","","","",[],"","","","","","","","",[],"","",[],"",""),'Presente'), new Asistencia(new Alumno("Pa", "Ra","333","","","","","","",[],"","","","","","","","",[],"","",[],"",""),"Ausente c/aviso"), new Asistencia(new Alumno("Ma", "Jo","444","","","","","","",[],"","","","","","","","",[],"","",[],"",""),'Presente')],
    public listado_recuperan: Asistencia[] = [new Asistencia(new Alumno("Pepe", "Perez","222","","","","","","",[],"","","","","","","","",[],"","",[],"",""), "")]

  ){}
}
// listado_recuperan debería ser una arreglo de la clase de datos
//que se muestren en la lista de recuperación
//o al menos los datos de Asistencia, fecha_ausencia y grupo
