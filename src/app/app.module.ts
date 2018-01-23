import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AddShoppingItemPage} from "../pages/add-shopping-item/add-shopping-item";
import {EditShoppingItemPageModule } from "../pages/edit-shopping-item/edit-shopping-item.module";
import {ShoppingListService} from "../services/shopping-list/shopping-list.service";
import {ToastService} from "../services/toast/toast.service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ToastService
  ]
})
export class AppModule {}
