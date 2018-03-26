import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class AlumnoService {
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

    crearAlumno(data){
      if(data.grupo == ""){delete data.grupo;} //Se elimina el dato porque espera un Id de Grupo
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.post(this.url+"/alumno",data,{headers: headers}).map(res => res.json());
    }

    getListaAlumnos(){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/alumnos', {headers:headers}).map(res => res.json());
    }

    getAlumnosInactivos(){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/alumnos-inactivos', {headers:headers}).map(res => res.json());
    }

    getAlumnosFiltro(list){
        list = list.toString();
        if(list == ""){
          list = 'null';
        }
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/alumnos-filtro/'+list, {headers:headers}).map(res => res.json());
    }

    getAlumno(id){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/alumno/'+id, {headers:headers}).map(res => res.json());
    }

    deleteAlumno(id){
      let headers = new Headers({'Content-Type':'application/json', 'Autorizacion': this.getToken()});
      let options = new RequestOptions({headers: headers});
      return this._http.delete(this.url+"/alumno/"+id,options).map(res => res.json());
    }

    editAlumno(id, data){
      if(data.grupo == ""){delete data.grupo;} //Se elimina el dato porque espera un Id de Grupo
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.put(this.url+"/alumno/"+id,data,{headers: headers}).map(res => res.json());
    }
}
