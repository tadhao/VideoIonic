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

  // navigatePlay() {
  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Finished Video') },
  //     errorCallback: (e) => { console.log('Error: ', e) },
  //     orientation: 'portrait'
  //   };

  //   // http://www.sample-videos.com/
  //   this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  // }
// stopVideo(){
//   this.videoPlayer.close();
//   console.log("video has stoped");
// }


// async navigatePlay(){
//   try{
// this.videoOptions={
//   volume: 0.7
// }
// this.videoUrl="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4"

// setTimeout(()=>{
//   this.stopVideo();
// },10000);

// await this.videoPlayer.play(this.videoUrl, this.videoOptions);
// console.log("video is complited");
//   }
//   catch(e){
//     console.error(e);
//   }
// }


navigatePlay(){
  this.videoPlayer.play('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4').then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
}

}
