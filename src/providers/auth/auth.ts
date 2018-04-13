import { Injectable } from '@angular/core';
import { ApiProvider } from "../api/api";
import { AuthRoutes } from "./auth.routes";
import { UserData, UserRegister } from "../types/userData";
import {  HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public apiProvider: ApiProvider,private storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  login(userData: UserData): Promise<any> {
    

    const loginPath = 'http://localhost:8000/api/login_check';
    
    const formData = new FormData();
    formData.append("_username",userData.username);
    formData.append("_password",userData.password);



     return new Promise((resolve, reject) => {

        fetch(loginPath, {
          method: 'POST',
          body: formData
        })
        .then(this.handleErrors)
        .then(response =>{
          response.json().then(result=>{
             
          resolve(result);

         }).catch(err=>{
            reject(err)
        });
        }).catch(err=>{
          reject(err)
        });

    
     
    })

  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

  register(userData: UserRegister): Promise<any> {

    const credentials = {
      "username": userData.username,
      "email": userData.email,
      "password":userData.password
    };


    
       
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


  getUserProfil(): Promise<any>{


   
  return new Promise((resolve, reject) => {


      this.storage.get('token').then(tok=>{

      let headers = new HttpHeaders();
    
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', 'Bearer ' + tok);

      this.apiProvider.get('/api/current-user',{headers: headers}).then(rep=>{

           this.storage.set('user', rep);

            resolve("ok");
          
          }).catch(error=>{

            reject(error);

          })
      }).catch(error=>{

        reject('erro');
      })

  
})

    

   
    
  }


}
