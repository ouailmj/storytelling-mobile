import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { UserData } from '../types/userData';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  
  constructor(public http: HttpClient,private storage: Storage,public apiProvider: ApiProvider) {
    console.log('Hello UserProvider Provider');
  }

  
  getUser(){

  }

  updateUser(userdata:UserData){

    return new Promise((resolve, reject) => {


      this.storage.get('token').then(tok=>{

      let headers = new HttpHeaders();
    
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', 'Bearer ' + tok);

      this.apiProvider.put('/api/update-profile',userdata,{headers: headers}).then(rep=>{

          console.log(rep);

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
