/*
# Install Cordova Plugins
ionic cordova plugin add cordova-plugin-media-capture
ionic cordova plugin add cordova-plugin-media
ionic cordova plugin add cordova-plugin-file

# Install NPM Packages
npm install @ionic-native/media-capture @ionic-native/media @ionic-native/file
*/




import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
  }

navigate(){
  this.navCtrl.push(HomePage);
}
navigateAgain(){
  this.navCtrl.push("AgainNextPage");
}

}
