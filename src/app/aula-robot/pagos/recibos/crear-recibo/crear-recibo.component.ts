import { Component, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { fadeLeft } from '../../../../animation';
import { PagoService } from '../../../../servicios/pago.service';
import { AlumnoService } from '../../../../servicios/alumno.service';
import { Router, ActivatedRoute} from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'crear-recibo',
  templateUrl: './crear-recibo.component.html',
  styleUrls: ['../recibos.css'],
  providers: [AlumnoService, PagoService],
  animations: [fadeLeft]
})
export class CrearReciboComponent implements DoCheck{

  public recibo;
  public reciboAux;
  public alumnos;
  public generado = false;
  public cambioSelect;
  public meses;
  public todos = false;
  public aMeses;
  public anios;
  public nroRecibo;

  @ViewChild('content') content: ElementRef;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService: AlumnoService,
    private _pagoService: PagoService
  ) {
    this._alumnoService.getListaAlumnos().subscribe(
        result =>{
          if(result)
            this.alumnos = result.alumnos;
            this.cambioSelect = "";
            this._pagoService.getNroRecibo().subscribe(
              result =>{
                if(result){
                  if(result.length == 0)
                    this.nroRecibo = 0;
                  else
                      console.log(result)
                }
              },
              error =>{if(error.status == 404){
                localStorage.clear();
                this._router.navigate(['/error',1])
              }
              else{
                this._router.navigate(['/error',2])
              }}
            )
        },
        error =>{
          //Verifica si el error es por token expirado.
            if(error.status == 404){
              localStorage.clear();
              this._router.navigate(['/error',1])
            }
            else{
              this._router.navigate(['/error',2])
            }
        }
    );
    this.recibo = {
      nro: this.nroRecibo,
      fecha: undefined,
      tipo: '',
      alumno: undefined,
      monto: 0,
      montoT: "",
      descripcion: "",
      meses: [],
      anio: undefined,
      grupo: undefined
    };
    this.meses = ['Marzo','Abril','Mayo','Junio', 'Julio',
                  'Agosto','Septiembre','Octubre','Noviembre']
    this.anios = Array.from(new Array(100), (x,i) => i + 2017);
  }

  ngDoCheck(){
    if(this.cambioSelect != this.recibo.tipo){
      this.generado = false;
      this.cambioSelect = this.recibo.tipo;
      this.recibo = {
        nro: this.nroRecibo,
        fecha: undefined,
        tipo: this.cambioSelect,
        alumno: undefined,
        monto: 0,
        montoT: "",
        descripcion: "",
        meses: [],
        anio: undefined,
        grupo: undefined
      };
    }
  }

  traduccion(){
    var monto = parseInt(this.recibo.monto)
    return this._pagoService.st(monto);
  }

  generarVista(){
    this.reciboAux = null;
    this.reciboAux = {
      nro: this.recibo.nro, // Cambiar por consulta a la base
      fecha: this.recibo.fecha,
      tipo: this.recibo.tipo,
      alumno: this.alumnos[this.recibo.alumno],
      monto: this.recibo.monto,
      montoT: this.traduccion()
    }
    if(this.reciboAux.tipo == 'mensual'){
      if(this.todos)
        this.reciboAux.meses = this.meses;
      else
        this.reciboAux.meses = this.recibo.meses;
    }

    if(this.reciboAux.tipo == 'vacante'){
      this.reciboAux.anio = this.recibo.anio;
      this.reciboAux.grupo = this.recibo.grupo;
    }
    if(this.reciboAux.tipo == 'otro')
      this.reciboAux.descripcion = this.recibo.descripcion;

    this.generado = true;
    console.log(this.reciboAux);
  }

  generarRecibo(){
    let doc = new jsPDF('p', 'pt', 'a4', 1);
    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15,15, {
      'width': 500,
      'elementHandlers': specialElementHandlers
    },
    function(){
        doc.save('recibo.pdf');
    });

    // var doc = new jsPDF('p', 'pt', 'a4', true);

    // doc.fromHTML($('#renderMe').get(0), 15, 15, {
    //   'width': 500
    // },
    // function(){
    //     doc.save('thisMotion.pdf');
    // });



  }

}
