import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import {  LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
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

    uploadFile(imageURI) {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();
  
   
  
      let options2: FileUploadOptions = {
        fileKey: 'avatar',
        httpMethod: 'POST',
        headers: { 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1NVUEVSX0FETUlOIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1Mjk2ODk1NjIsImV4cCI6MTU2MTIyNTU2Mn0.iHkUqr7O7PNNQmPOBQtvIKgXBIh-MpyNSiWQisWqkfj3olrXKICUxV-L2qFXOT35xBWjW0G5LBm15jyQmKJAOOrEzAXgmSiXrdvQ9bMoLKmAHUt0qFxTR4F2UXCdvw-dJMt0TPmACiXglueECZQ4C-MQW4FATvdJQWZfxepPFBYKA4j6mk0gdGCBPgbXP5np88puYpimxp9OMF95940PYIKUapc1tQP9egtmUbPUyqWZcpD_nSUvk4ox__uqq5JNPfikl-WPvJqxxsGVJm_pc1BRNjH2Ba6cbC9H5JQFTtBlfhtRpGfDJOpi48L-_609SIHfneTxCLiB6iZVoJpszbfzHC6obaXmYkCpdehDR_L7-QStYCCxqm8A3_Hdl8Ksv-OgVRgTDh1fokPlLnzODr6wnWs6LJJcn8KF-KKf3olou6gruZRPX5zdb9nn9H7NPDaZo_0Buhe2tLrWa4JOXJsBQG_ds_GjdDfO5BukzUX3jICa6WC7W-tBXYO7bBZOptE6rajo3nF1MtSyqlxsA6qwtpkvHYgb0dt8GLh8kr8qfzhHuNhOjbpbaWuDFhA0kUBDzZ8YAReWXCaUWHVvViyFP8aEcqp5vFqhEoXwVwGz3E6X6jQc96XBofSqiBZT4_JZIAkMi3p42CRwesqRWpYh-3Alg1G3hVgAapF-4o0' },
    
         }
  
      fileTransfer.upload(imageURI, 'http://192.168.1.147:8000/api/upload-avatar', options2,true)
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
