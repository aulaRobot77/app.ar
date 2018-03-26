import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class GrupoService {
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

    crearGrupo(data){
      // console.log(data);
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.post(this.url+"/grupo",data,{headers: headers}).map(res => res.json());
    }

    getListaGrupos(){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/grupos', {headers:headers}).map(res => res.json());
    }

    getGrupo(id){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/grupo/'+id, {headers:headers}).map(res => res.json());
    }

    getGrupoCompleto(id){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/grupo-completo/'+id, {headers:headers}).map(res => res.json());
    }

    deleteGrupo(id){
      let headers = new Headers({'Content-Type':'application/json', 'Autorizacion': this.getToken()});
      let options = new RequestOptions({headers: headers});
      return this._http.delete(this.url+"/grupo/"+id,options).map(res => res.json());
    }

    editGrupo(id, data){
      console.log(data);
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.put(this.url+"/grupo/"+id,data,{headers: headers}).map(res => res.json());
    }
}
