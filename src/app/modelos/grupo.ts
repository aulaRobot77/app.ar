export class Grupo{
  constructor(
    public nombre: string,
    public anio: number,
    public hora_fin: number,
    public hora_inicio: number,
    public dia_semana: string,
    public instructores: Array<any>,
    public cursan: Array<any>
  ){}
}
