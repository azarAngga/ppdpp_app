import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AbsensiPage } from '../absensi/absensi';
import { LoginPage } from '../login/login';
import { RincianGajianPage } from '../rincian-gajian/rincian-gajian';
import { IndexKaryawanPage } from '../index-karyawan/index-karyawan';

//import '../assets/lte/dist/js/adminlte.js';
import * as $ from 'jquery';
declare var $: $;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
login: any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  	this.presentModal();
  	
  }

  ngAfterViewInit(){

  }

  presentModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.onDidDismiss(data => {
    	 console.log(data);
    	 this.login = "oke";
   	});
    modal.present();
  }

  actionProfile(){
  	let modal2 = this.modalCtrl.create(ProfilePage);
    modal2.onDidDismiss(data => {
   	});
   	modal2.present();
  }

  actionAbsensi(){
  	let modal2 = this.modalCtrl.create(AbsensiPage);
    modal2.onDidDismiss(data => {
   	});
   	modal2.present();
  }

  actionRincian(){
    let modal2 = this.modalCtrl.create(RincianGajianPage);
    modal2.onDidDismiss(data => {
    });
    modal2.present();
  }

  actionIndex(){
    let modal2 = this.modalCtrl.create(IndexKaryawanPage);
    modal2.onDidDismiss(data => {
    });
    modal2.present();
  }

}
