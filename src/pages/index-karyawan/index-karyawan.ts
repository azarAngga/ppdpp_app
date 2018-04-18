import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the IndexKaryawanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-karyawan',
  templateUrl: 'index-karyawan.html',
})
export class IndexKaryawanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexKaryawanPage');
  }

  dismiss(){
  	let data = { 'foo': 'bar' };
  	this.viewCtrl.dismiss(data);
  }

}
