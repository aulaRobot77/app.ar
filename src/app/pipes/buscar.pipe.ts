import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})

@Injectable()
export class BuscarPipe implements PipeTransform{
  transform(arreglo: any, term: any, dato: any):any{
    if(term === undefined || term === "" || dato === 'all'){
      return arreglo
    }
    else{
      return arreglo.filter(function(item){
        return item[dato].toString().toLowerCase().includes(term.toLowerCase());
      })
    }
  }
};
