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
    id_event:any = false;

    constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private toastCtrl: ToastController, private storage: Storage, private eventProvider: EventProvider) {
        this.authForm = formBuilder.group({

            email: ['', Validators.compose([Validators.email,Validators.required])],

        });

      console.log('start ====',this.id_event);

        this.id_event = this.navParams.get('id_event') === undefined ? false : this.navParams.get('id_event');
      console.log(this.id_event);

    }

    removeEmail(index) {

        this.emails.splice(index, 1)
    }

    addEmail(){
        if(this.authForm.valid) {
          if (this.emails.indexOf(this.email) == -1) {

              this.emails.push(this.email)
            if(this.id_event !== false) this.send();

          }

          else{
            this.presentToast("déja exist")
          }
        }else{

            this.presentToast("required email")
        }
    }

    send(){

      console.log('id event to push email',this.id_event);
      this.showLoader()
        console.log('emails', this.emails);
        if(this.id_event  !== false){
          this.eventProvider.addInviteFriends(this.emails, this.id_event) .then(res=>{
            this.loading.dismiss();
            console.log(res)
            this.navCtrl.push(FinishCreateEventPage)
          }).catch(error=>{this.loading.dismiss();console.log(error)})
        }else {
        this.storage.get('currentEvent').then(event=>{
            this.eventProvider.addInviteFriends(this.emails, event.id) .then(res=>{
                this.loading.dismiss();
                console.log(res)
                this.navCtrl.push(FinishCreateEventPage)
            }).catch(error=>{this.loading.dismiss();console.log(error)})
          }).catch(error=>{console.log(error);this.loading.dismiss()})
        }
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
