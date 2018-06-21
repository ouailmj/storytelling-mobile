import { Storage } from '@ionic/storage';
import {ApiProvider} from "../api/api";
import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {ChoosePlanData} from "../types/eventData";
import {EventRoutes} from "./event.routes";

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

    constructor(public apiProvider: ApiProvider, private storage: Storage) {
        console.log('Hello EventProvider Provider');
    }

    newEvent(): Promise<any> {

        return new Promise((resolve, reject) => {

            this.storage.get('token').then(tok => {

                let headers = new HttpHeaders();

                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);

                this.apiProvider.get('/api/event/new', {headers: headers}).then(rep => {
                    console.log('frfrfrfrf')

                    console.log(rep)

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
                    resolve(rep);
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
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

}
