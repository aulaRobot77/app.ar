import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class PagoService {
    public url: String;
    public token;

    constructor(private _http:Http){
        this.url = GLOBAL.url;
    }

    getToken(){
        let tokenIn = localStorage.getItem('token');
        if(tokenIn != 'undefined'){
            this.token = tokenIn;
        }
        else{
            this.token = null;
        }
        return this.token
    }

    crearPago(data){
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.post(this.url+"/pago",data,{headers: headers}).map(res => res.json());
    }

    getListaPagos(){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/pagos', {headers:headers}).map(res => res.json());
    }

    getPago(id){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/pago/'+id, {headers:headers}).map(res => res.json());
    }

    getPagoCompleto(id){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/pago-completo/'+id, {headers:headers}).map(res => res.json());
    }

    deletePago(id){
      let headers = new Headers({'Content-Type':'application/json', 'Autorizacion': this.getToken()});
      let options = new RequestOptions({headers: headers});
      return this._http.delete(this.url+"/pago/"+id,options).map(res => res.json());
    }

    editPago(id, data){
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.put(this.url+"/pago/"+id,data,{headers: headers}).map(res => res.json());
    }

    getNroRecibo(){
      let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
      return this._http.get(this.url+'/nro-recibo/', {headers:headers}).map(res => res.json());
    }


    // Funcionalidad para Pesos a Letras

    resultado="";
     o=new Array("diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve");
     u=new Array("cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve");
     d=new Array("", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa");
     c=new Array("", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos");
    nn(n){
     n=parseFloat(n).toFixed(2); /*se limita a dos decimales, no sabía que existía toFixed() :)*/
     let p=n.toString().substring(n.toString().indexOf(".")+1); /*decimales*/
     let m=n.toString().substring(0,n.toString().indexOf(".")); /*número sin decimales*/
      m=parseFloat(m).toString().split("").reverse(); /*tampoco que reverse() existía :D*/
     let t="";
    /*Se analiza cada 3 dígitos*/
    for (var i=0; i<m.length; i+=3){
      var x=t;
      /*formamos un número de 2 dígitos*/
      var b=m[i+1]!=undefined?parseFloat(m[i+1].toString()+m[i].toString()):parseFloat(m[i].toString());
      /*analizamos el 3 dígito*/
      t=m[i+2]!=undefined?(this.c[m[i+2]]+" "):"";
      t+=b<10?this.u[b]:(b<30?this.o[b-10]:(this.d[m[i+1]]+(m[i]=='0'?"":(" y "+this.u[m[i]]))));
      t=t=="ciento cero"?"cien":t;
      if (2<i&&i<6)
        t=t=="uno"?"mil ":(t.replace("uno","un")+" mil ");
      if (5<i&&i<9)
        t=t=="uno"?"un millón ":(t.replace("uno","un")+" millones ");
      t+=x;
      //t=i<3?t:(i<6?((t=="uno"?"mil ":(t+" mil "))+x):((t=="uno"?"un millón ":(t+" millones "))+x));
    }
    t+=" con "+p+"/100";
    /*correcciones*/
    t=t.replace("  "," ");
    t=t.replace(" cero","");
    //t=t.replace("ciento y","cien y");
    //alert("Numero: "+n+"\nNº Dígitos: "+m.length+"\nDígitos: "+m+"\nDecimales: "+p+"\nt: "+t);
    //document.getElementById("esc").value=t;
    return t;
    }

    st(i){
      let t=""+this.nn(i);
      return t;
    }
}
