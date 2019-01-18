import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CountPage } from '../pages/count/count';
import { QuizPage } from '../pages/quiz/quiz';
import { ScorePage } from '../pages/score/score';
import { FeedbackPage } from '../pages/feedback/feedback';
import { RankPage } from '../pages/rank/rank';
import { ResulthistPage } from '../pages/resulthist/resulthist';
import { ResulthistpercPage } from '../pages/resulthistperc/resulthistperc';



LoginPage
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CountPage,
    QuizPage,
    ScorePage,
    FeedbackPage,
    RankPage,
    ResulthistPage,
    ResulthistpercPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CountPage,
    QuizPage,
    ScorePage,
    FeedbackPage,
    RankPage,
    ResulthistPage,
    ResulthistpercPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
