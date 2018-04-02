import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { AuthRoutes } from "./auth.routes";
import { UserData } from "../types/userData";
import { Storage } from "@ionic/storage";


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public apiProvider: ApiProvider, private storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  login(userData: UserData) {
    const credentials = {
      _username: userData.username,
      _password: userData.password,
    };

    this.apiProvider.post(AuthRoutes.apiLoginCheckUrl, JSON.stringify(credentials)).then((res)=> {
      console.log(res);

      // Save the token
    }).catch((err) => {
      console.log(err);
    })
    ;
  }
}
