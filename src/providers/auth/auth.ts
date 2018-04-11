import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { AuthRoutes } from "./auth.routes";
import { UserData, UserRegister } from "../types/userData";



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

  login(userData: UserData):Promise<Response> {
    

    const loginPath = 'http://localhost:8000/api/login_check';

    const formData = new FormData();
    formData.append("_username",userData.username );
    formData.append("_password", userData.password);

  return  fetch(loginPath, {
      method: 'POST',
      body: formData
    });

  }

  register(userData: UserRegister): Promise<any> {

    const credentials = {
      "username": userData.username,
      "email": userData.email,
      "password":userData.password
    };


    // let headers = new Headers();
    // headers.append('Content-Type','application/ld+json');
    // let options = new RequestOptions({ headers:headers});
       
   return this.apiProvider.post(AuthRoutes.apiReg, credentials);
  }

  // login(userData: UserData) {
  //   const credentials = {
  //     _username: userData.username,
  //     _password: userData.password,
  //   };

  //   this.apiProvider.post(AuthRoutes.apiLoginCheckUrl, JSON.stringify(credentials)).then((res)=> {
  //     console.log(res);

  //     // Save the token
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  //   ;
  // }
}
