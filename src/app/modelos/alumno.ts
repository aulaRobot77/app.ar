export class Alumno{
  constructor(
      public nombre: string,
      public apellido: string,
      public dni: string,
      public fechaNacimiento: string,
      public fechaIngreso: string,
      public domicilio: string,
      public escuela: string,
      public grado: string,
      public horarioEscolar: string,
      public horariosLibres: Array<any>,
      public nombreMadre: string,
      public telMadre: string,
      public emailMadre: string,
      public profesionMadre: string,
      public nombrePadre: string,
      public telPadre: string,
      public emailPadre: string,
      public profesionPadre: string,
      public telefonos: Array<string>,
      public acotaciones: string,
      public observaciones: string,
      public niveles: Array<any>,
      public fechaFinalizacion: string,
      public grupo: any
  ){}
}
