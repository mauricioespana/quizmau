import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signup = SignupPage;

  users = [];
  user = "";
  pass = "";
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    this.storage.keys() 
    .then(keys =>{
      keys;   
      if (keys.some(key => key == 'usuarios')){
        this.storage.get('usuarios')
        .then(users => {
          this.users=JSON.parse(users);
        })
      } 
    })
  }
  clickLogin(){
    let index = this.users.findIndex( users => users.user == this.user && users.pass == this.pass)
    if (index >= 0){
      console.log('Usuario registrado');
      const alert = this.alertCtrl.create({
        title: 'Bienvenido!',
        subTitle: 'Inicio de sesión exitoso',
        buttons: ['OK']
      });
      alert.present();
    } else{
      console.log('Usuario no registrado');
      const alert1 = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Nombre de usuario o contraseña incorrecto',
        buttons: ['OK']
      });
      alert1.present();
    }
  }

  clickSignup(){
    this.navCtrl.push(this.signup, {users:this.users});
  }

}
