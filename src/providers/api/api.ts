import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  public getLancamentos() {
    return new Promise(resolve => { 
      this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=0d56c290adcda5b4f4e2e89be49fc9e4&language=pt-BR')
      .subscribe(data => {
        resolve(data);
      })
    });
  }

}
