import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountPage } from '../count/count';
import { FeedbackPage } from '../feedback/feedback';
import { RankPage } from '../rank/rank';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})


    

export class HomePage {

  currentDate;
  formatedDate;
  formatedDateObj;


  constructor(public navCtrl: NavController) {
    this.currentDate = new Date();

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
