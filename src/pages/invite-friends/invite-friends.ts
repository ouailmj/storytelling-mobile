import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventProvider} from "../../providers/event/event";
import {Storage} from "@ionic/storage";
import {FinishCreateEventPage} from "../finish-create-event/finish-create-event";

/**
 * Generated class for the InviteFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends.html',
})
export class InviteFriendsPage {



    public emails: string [] =[];
    public email: string = '';
    authForm: FormGroup;
    loading : any ;

    constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private toastCtrl: ToastController, private storage: Storage, private eventProvider: EventProvider) {
        this.authForm = formBuilder.group({

            email: ['', Validators.compose([Validators.email,Validators.required])],

        });
    }

    removeEmail(index) {

        this.emails.splice(index, 1)
    }

    addEmail(){
        if(this.authForm.valid) {
          if (this.emails.indexOf(this.email) == -1) {

              this.emails.push(this.email)
          }else{
            this.presentToast("déja exist")
          }
        }else{

            this.presentToast("required email")
        }
    }

    send(){

        this.showLoader()
           console.log('emails', this.emails)
        this.storage.get('currentEvent').then(event=>{
            this.eventProvider.addInviteFriends(this.emails, event.id) .then(res=>{
                this.loading.dismiss();
                console.log(res)
                this.navCtrl.push(FinishCreateEventPage)
            }).catch(error=>{this.loading.dismiss();console.log(error)})
        }).catch(error=>{console.log(error);this.loading.dismiss()})
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });

        this.loading.present();
    }
}
