import {TablaAsistencia} from './tabla-asistencia';

export class AsistenciaAnual {
  constructor(
    public grupo: string,
    public instructor: string,
    public tabla: Array<TablaAsistencia>
  ){}
}
