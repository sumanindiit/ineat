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
  constructor(
    public router: Router,
    private platform: Platform,
    private common: CommonService,
    public api: ApiService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
  }

  logout() {
    GoogleAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
