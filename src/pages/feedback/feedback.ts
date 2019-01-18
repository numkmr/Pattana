import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CountPage } from '../count/count';
import { HomePage } from '../home/home';
import { RankPage } from '../rank/rank';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})

export class FeedbackPage {


  falseques: Array <any> =[];
  corrans: Array <any> =[];
  

  constructor(public alertCtrl: AlertController, private navCtrl: NavController, public navParams: NavParams) {
    this.falseques= ["The type of diagram in which the operations are apecified on objects is considered as"]
    this.corrans=["namja"]
  }

  
  clickhome()
  {
    this.navCtrl.push(HomePage)
  }
  clickfeedback()
  {
    this.navCtrl.push(FeedbackPage)
  }
  clickrank()
  {
    this.navCtrl.push(RankPage)
  }




  Feedback() {
    const prompt = this.alertCtrl.create({
      title: 'Send Question',
      message: "Enter your question, a problem in this question",
      inputs: [
        {
          name: 'Question',
          placeholder: 'Question'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }


  
  

}
