import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import {  LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  constructor(
    public apiProvider: ApiProvider,
    private storage: Storage,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
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


    getEvent(id):Promise<any>{


      return new Promise((resolve, reject) => {
    
    
          this.storage.get('token').then(tok=>{
    
          let headers = new HttpHeaders();
        
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
    
          this.apiProvider.get(`/api/show-event/${id}`,{headers: headers}).then(data=>{
    
            
              //  this.storage.set('user', rep);
    
                resolve(data["hydra:member"][0]);
              
              }).catch(error=>{
    
                reject(error);
                
              })
          }).catch(error=>{
    
            reject('erro');
          })
    
      
      })
    
    }

    uploadFile(imageURI) {
      this.storage.get('token').then(tok=>{

    
            let loader = this.loadingCtrl.create({
              content: "Uploading..."
            });
            loader.present();
            const fileTransfer: FileTransferObject = this.transfer.create();
        
        
        
            let options: FileUploadOptions = {
              fileKey: 'avatar',
              httpMethod: 'POST',
              headers: { 'Authorization': 'Bearer '+tok },
          
              }
        
            fileTransfer.upload(imageURI, ApiProvider.getFullUrl('/api/upload-avatar') , options,true)
              .then((data) => {
              console.log(data+" Uploaded Successfully");
              //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
              loader.dismiss();
              this.presentToast("Image uploaded successfully");
            }, (err) => {
              console.log(err);
              loader.dismiss();
              this.presentToast(err);
            });

      })
    }
  
  
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 6000,
        position: 'bottom'
      });
  
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
  }




}
