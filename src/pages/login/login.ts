import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

import * as $ from 'jquery';
declare var $: $;

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngAfterViewInit(){
  	
  }


  actionLogin(){
  	//this.navCtrl.setRoot(HomePage);
    
       let data = { 'foo': 'bar' };
       this.viewCtrl.dismiss(data);
    
  }



}
