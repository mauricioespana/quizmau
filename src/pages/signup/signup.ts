import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  users;
  user;
  pass;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.users = navParams.get('users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  clickUser() {
    this.users.push({
      user: this.user,
      pass: this.pass
    });
    this.storage.set('usuarios', JSON.stringify(this.users));  
  }
}
