import { Storage } from '@ionic/storage';
import {ApiProvider} from "../api/api";
import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {ChoosePlanData, EventInformationData, PaymentData} from "../types/eventData";
import {EventRoutes} from "./event.routes";
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
    )
    {
        console.log('Hello EventProvider Provider');
    }

    newEvent(): Promise<any> {

        return new Promise((resolve, reject) => {

            this.storage.get('token').then(tok => {

                let headers = new HttpHeaders();

                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);

                this.apiProvider.get('/api/event/new', {headers: headers}).then(rep => {
                    this.apiProvider.get(rep.appEventURI, {headers: headers}).then(event => {
                        this.storage.set('currentEvent', event);
                        console.log('event eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',event);
                    }).catch(err=>{console.log('error');reject(err);});

                    resolve("ok");
                }).catch(error => {
                    console.log('error')
                    reject(error);
                })
            }).catch(error => {
                reject('erro');
            })
        })
    }

    getEvent(route): Promise<any>  {

        return new Promise((resolve, reject) => {

            this.storage.get('token').then(tok => {

                let headers = new HttpHeaders();

                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);

                this.apiProvider.get(route, {headers: headers}).then(rep => {
                console.log("get Event ======>",rep );
                    resolve(rep);
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })

        })
    }

    getEvents():Promise<any>{


        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{

                let headers = new HttpHeaders();

                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);

                this.apiProvider.get('/api/event-joined',{headers: headers}).then(rep=>{


                    //  this.storage.set('user', rep);
                    console.log("list Events ====> ",rep);

                    resolve(rep["hydra:member"]);

                }).catch(error=>{

                    reject(error);

                })
            }).catch(error=>{

                reject('erro');
            })


        })

    }

    addChoosePlan(choosePlanData: ChoosePlanData, id): Promise<any>{

        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{

                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                console.log(EventRoutes.apiChoosePlan+id)
                this.apiProvider.post(EventRoutes.apiChoosePlan+id, choosePlanData,{headers: headers}).then(rep=>{
                    console.log(rep)
                    resolve("ok");

                }).catch(error=>{


                    reject(error);

                })
            }).catch(error => {
                console.log(error.status);
            });


        })

    }

    uploadFile(imageURI, key ='avatar', route = '/api/upload-avatar', isPresentToast = true) {

        return new Promise((resolve, reject) => {
            this.storage.get('token').then(tok => {
                // let loader = this.loadingCtrl.create({
                //     content: "Uploading..."
                // });
                // loader.present();
                const fileTransfer: FileTransferObject = this.transfer.create();

                let options: FileUploadOptions = {
                    fileKey: key,
                    httpMethod: 'POST',
                    headers: {'Authorization': 'Bearer ' + tok},

                }

                fileTransfer.upload(imageURI, ApiProvider.getFullUrl(route), options, true)
                    .then((data) => {
                        console.log(data);
                        resolve(data)
                        //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
                        // loader.dismiss();
                        if (isPresentToast) this.presentToast("Image uploaded successfully");
                    }, (err) => {
                        reject(err);
                        // loader.dismiss();
                        this.presentToast(err);
                    });

            })
        })
    }

    addEventInformation(eventInformationData: EventInformationData, id): Promise<any>{
        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                console.log(EventRoutes.apiEventInformation+id);
                let data = {
                    "description": eventInformationData.description,
                    "title": eventInformationData.title,
                    "place": eventInformationData.place,
                    "startsAt": eventInformationData.startsAt,
                    "endsAt": eventInformationData.endsAt,
                    "idCat": eventInformationData.idCat
                }
                this.apiProvider.post(EventRoutes.apiEventInformation+id, data,{headers: headers}).then(rep=>{
                    console.log(rep)
                    resolve("ok");

                }).catch(error=>{
                    reject(error);
                })
            }).catch(error => {
                console.log(error.status);
            });


        })
    }

    isFreePlan(url): Promise<boolean>{
        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);

                this.apiProvider.get(url, {headers: headers}).then(rep=>{
                    console.log('resultat  ',rep.plan)
                    this.apiProvider.get(rep.plan, {headers: headers}).then(plan=>{
                        if(plan.planKey !== 'free'){
                            resolve(false)
                        }else {

                            resolve(true);
                        }
                    }).catch(error=>{
                        reject(error);
                    })

                }).catch(error=>{
                    reject(error);
                })
            }).catch(error => {
                console.log(error.status);
            });


        })
    }

    addEventChallenge(challenges: string[], id): Promise<any>{
        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                console.log(EventRoutes.apiEventChallenge+id);
                let data = {
                    "challenges": challenges
                }
                this.apiProvider.post(EventRoutes.apiEventChallenge+id, data,{headers: headers}).then(rep=>{
                    console.log(rep)
                    resolve("ok");

                }).catch(error=>{
                    reject(error);
                })
            }).catch(error => {
                console.log(error.status);
            });


        })
    }

    addCoverEvent(pictureOne : any,pictureTwo : any,pictureThree : any,coverType : any, id): Promise<any>{
        return new Promise((resolve, reject) => {

                console.log(EventRoutes.apiCoverEvent+id)
                this.uploadFile(pictureOne,'imageFile', EventRoutes.apiCoverEvent+id+'/firstImageCover');


        })
    }

    addPaymentForEvent(eventPayment: PaymentData,id):  Promise<any>{
        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                let data={
                    "monthExpire":  +eventPayment.monthExpire,
                    "cvv": +eventPayment.cvv,
                    "numberCard": +eventPayment.numberCard,
                    "yearExpire": +eventPayment.yearExpire,
                    "price": +eventPayment.price
                }

                this.apiProvider.post(EventRoutes.apiPayment+id, data,{headers: headers}).then(rep=>{
                    resolve("ok");

                }).catch(error=>{
                    console.log(error.status);
                    reject(error);
                })
            }).catch(error => {
                console.log(error.status);
            });


        })
    }

    addInviteFriends(emails: string[], id): Promise<any>{
        return new Promise((resolve, reject) => {


            this.storage.get('token').then(tok=>{
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                let data={
                    "emails":  emails
                }

                this.apiProvider.post(EventRoutes.apiInviteFriends+id, data,{headers: headers}).then(rep=>{
                    resolve(rep);

                }).catch(error=>{
                    console.log(error.status);
                    reject(error);
                })
            }).catch(error => {
                console.log(error.status);
            });


        })
    }

    isTotalPayed(): Promise<any>{
        return new Promise((resolve, reject) => {

            this.storage.get('token').then(tok=>{
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                this.storage.get('currentEvent').then(event=>{
                    this.apiProvider.get(EventRoutes.apiIsTotalPayed+event.id, {headers: headers}).then(isTotalPayed=>{
                        resolve(isTotalPayed)
                    }).catch(error=>{
                        reject(error);
                    })
                }).catch(error=>{
                    reject(error);
                })
            }).catch(error => {
                console.log(error.status);
            })

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

    getPriceEvent(id): Promise<number>{
        return new Promise((resolve, reject) => {

            this.storage.get('token').then(tok => {

                let headers = new HttpHeaders();

                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);

                this.apiProvider.get(EventRoutes.apiPriceEvent+id, {headers: headers}).then(rep => {
                    console.log("price  ======>",rep );
                    resolve(rep);
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })

        })
    }
}
