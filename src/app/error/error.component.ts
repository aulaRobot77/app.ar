import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  public error_token = 0;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.error_token = 0;
    this._route.params.subscribe(
      params=>{
        if(params['def'] && params['def'] != undefined && params['def']!=""){
          var def = params['def'];
          this.error_token = parseInt(def)
        }
        else{
          this.error_token = 0
        }
      });
  }

}
