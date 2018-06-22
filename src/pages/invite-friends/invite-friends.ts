import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private toastCtrl: ToastController, private storage: Storage, private eventProvider: EventProvider) {
        this.authForm = formBuilder.group({

            email: ['', Validators.compose([Validators.email,Validators.required])],

        });
    }

    tapEvent(index) {

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

           console.log('emails', this.emails)


        this.storage.get('currentEvent').then(event=>{
            this.eventProvider.addInviteFriends(this.emails, event.id) .then(res=>{
                console.log(res)
                this.navCtrl.push(FinishCreateEventPage)
            }).catch(error=>{console.log(error)})
        }).catch(error=>{console.log(error)})
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
}
