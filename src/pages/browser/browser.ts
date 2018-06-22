import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {
  url: string="http://plumbdry.opensoftindia.in/media/video/e36a994f-938.mp4";

  constructor(public navCtrl: NavController, public navParams: NavParams, private inbrowse:InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');


  }
  hii(){
    const browser= this.inbrowse.create(this.url, '_self');
  }
bye(){
  const browser= this.inbrowse.create(this.url, '_system');
}
}
