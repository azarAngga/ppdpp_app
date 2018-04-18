import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the AbsensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absensi',
  templateUrl: 'absensi.html',
})
export class AbsensiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsensiPage');
  }

  dismiss(){
  	let data = { 'foo': 'bar' };
  	this.viewCtrl.dismiss(data);
  }

}
