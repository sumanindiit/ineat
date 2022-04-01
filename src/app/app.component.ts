import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { config } from './config';
import { CommonService } from './services/common.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userImage: any = 'assets/img/logo.png';
  userName: any;

  userId: any = localStorage.getItem('ineat_userid');
  userData: any = JSON.parse(localStorage.getItem('ineat_userData'));


  constructor(
    public router: Router,
    private platform: Platform,
    private common: CommonService,
    public api: ApiService,
  ) {
    this.initializeApp();
  }

  initializeApp() {

    if (this.userData != "") {
      this.userImage = this.userData?.image
      this.userName = this.userData?.first_name;
    }

  }

  logout() {
    GoogleAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
