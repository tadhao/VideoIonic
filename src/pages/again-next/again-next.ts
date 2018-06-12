import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import {VideoPlayer, VideoOptions} from '@ionic-native/video-player';


/**
 * Generated class for the AgainNextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-again-next',
  templateUrl: 'again-next.html',
})
export class AgainNextPage {

  videoOptions:VideoOptions;
  videoUrl:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia,
  private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
  //   console.log('ionViewDidLoad AgainNextPage');  let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Video played') },
  //     errorCallback: (e) => { console.log('Error streaming') },
  //     orientation: 'landscape'
  //   };

  //   this.streamingMedia.playVideo('https://drive.google.com/file/d/1NeJM8UmhgnDHodXK-GlueNbWkFjPMm7w/view?usp=drivesdk', options);
  }
async navigatePlay(){
  try{
this.videoOptions={
  volume: 0.7
}
this.videoUrl="https://drive.google.com/file/d/1NeJM8UmhgnDHodXK-GlueNbWkFjPMm7w/view?usp=drivesdk";
this.videoPlayer.play(this.videoUrl, this.videoOptions);
  }
  catch(e){
    console.error(e);
  }
}

}
