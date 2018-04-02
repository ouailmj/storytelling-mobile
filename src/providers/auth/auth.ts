import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { AuthRoutes } from "./auth.routes";


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public apiProvider: ApiProvider) {
    console.log('Hello AuthProvider Provider');
  }

  login(userData: any) {
    this.apiProvider.post(AuthRoutes.apiLoginCheckUrl, JSON.stringify(userData)).then((res)=> {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    ;
  }
}
