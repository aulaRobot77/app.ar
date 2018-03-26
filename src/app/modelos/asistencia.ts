import { Alumno } from './alumno';

export class Asistencia {
  constructor(
    public alumno: Alumno,
    public asistencia: string
    ){}
}
