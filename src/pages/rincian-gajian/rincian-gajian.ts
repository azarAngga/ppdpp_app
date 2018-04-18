import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RincianGajianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rincian-gajian',
  templateUrl: 'rincian-gajian.html',
})
export class RincianGajianPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RincianGajianPage');
  }

  dismiss(){
  	let data = { 'foo': 'bar' };
  	this.viewCtrl.dismiss(data);
  }

}
