export class Pago{
  constructor(
    public nroRecibo: string,
    public fecha: string,
    public monto: number,
    public descripcion: string,
    // Cuota Mensual
    public mes: any,
    // Vacante
    public anio: number,
    public id_alumno: any
    // Tipo??
  ){}
}
