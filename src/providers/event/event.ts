import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  constructor(public apiProvider: ApiProvider,private storage: Storage) {
    console.log('Hello EnevtProvider Provider');
  }


  getEvents():Promise<any>{


    return new Promise((resolve, reject) => {
  
  
        this.storage.get('token').then(tok=>{
  
        let headers = new HttpHeaders();
      
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('Authorization', 'Bearer ' + tok);
  
        this.apiProvider.get('/api/event-joined',{headers: headers}).then(rep=>{
  
          
            //  this.storage.set('user', rep);
            console.log(rep["hydra:member"][0].createdBy);
  
              resolve(rep["hydra:member"]);
            
            }).catch(error=>{
  
              reject(error);
              
            })
        }).catch(error=>{
  
          reject('erro');
        })
  
    
    })
  
    }


    getEventUser():Promise<any>{


      return new Promise((resolve, reject) => {
    
    
          this.storage.get('token').then(tok=>{
    
          let headers = new HttpHeaders();
        
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
    
          this.apiProvider.get('/api/event-joined',{headers: headers}).then(rep=>{
    
            
              //  this.storage.set('user', rep);
              console.log(rep["hydra:member"][0].createdBy);
    
                resolve(rep["hydra:member"]);
              
              }).catch(error=>{
    
                reject(error);
                
              })
          }).catch(error=>{
    
            reject('erro');
          })
    
      
      })
    
    }

    upImg(data : FormData):Promise<any>{


      return new Promise((resolve, reject) => {
    
    
          this.storage.get('token').then(tok=>{
    
          let headers = new HttpHeaders();
        
          headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
    
          this.apiProvider.post('/api/upload-avatar',data,{headers: headers}).then(rep=>{
    
            
              //  this.storage.set('user', rep);
              console.log(rep);
    
                resolve(rep);
              
              }).catch(error=>{
    
                reject(error);
                
              })
          }).catch(error=>{
    
            reject('erro');
          })
    
      
      })
    
    }




}
