import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { CountPage } from '../count/count';
import { HomePage } from '../home/home';

/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html',
})
export class RankPage {

  Rankingother: Array <any> =[];
  Rankingme: Array <any> =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Rankingother= ["Kamonruk","bolle","Prakitchai"]
    this.Rankingme = ["Namja"]
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankPage');
  }

  Feedback(){
    this.navCtrl.push(FeedbackPage)
  }

  readytoquiz()
  {
    this.navCtrl.push(CountPage)
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

}
