import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class UsuarioService {
    public url: String;
    public identity;
    public token;
    public usuarios;

    constructor(private _http:Http){
        this.url = GLOBAL.url;
        this.usuarios=[];
    }



    login(user_to_login, gettoken = null){
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }
        let params = JSON.stringify(user_to_login);
        let headers =  new Headers({'Content-Type': 'application/json'});
        return  this._http.post(this.url+'/login/', params, {headers:headers})
                          .map(res => res.json());
    }

    getIdentity(){
        let identityIn;
        try{
            identityIn = JSON.parse(localStorage.getItem('identity'));
        }
        catch(ex){
            console.log('no se ha logueado nadie aun')
        }

        if(identityIn != 'undefined'){
            this.identity = identityIn;
        }
        else{
            this.identity = null;
        }
        return this.identity;
    }
    insert(usr){
      this.usuarios.push(usr);
    }
    getAll(){
      return this.usuarios;
    }
    delete(pos){
      this.usuarios.splice(pos,1);
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

    getListaUsuarios(){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/usuarios', {headers:headers}).map(res => res.json());
    }

    getInstructores(){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/instructores', {headers:headers}).map(res => res.json());
    }

    getInstructoresFiltro(list){
        let headers = new Headers({'Content-Type': 'application/json', 'Autorizacion': this.getToken()});
        return this._http.get(this.url+'/instructores/'+list, {headers:headers}).map(res => res.json());
    }

    deleteUser(id){
      let headers = new Headers({'Content-Type':'application/json', 'Autorizacion': this.getToken()});
      let options = new RequestOptions({headers: headers});
      return this._http.delete(this.url+"/usuario/"+id,options).map(res => res.json());
    }

    changeUser(id, data){
      console.log(data);
      let headers = new Headers({"Content-Type":"application/json", 'Autorizacion': this.getToken()});
      return this._http.put(this.url+"/usuario/"+id,data,{headers: headers}).map(res => res.json());
    }

    home(){
        let headers = new Headers({'Content-Type': 'application/json'});
        return this._http.get(this.url+'/home', {headers:headers}).map(res => res.json());
    }
}
