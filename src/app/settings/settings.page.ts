import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userId: any = localStorage.getItem('ineat_userid');
  userData: any;

  constructor(
    public router:Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('ineat_userData'))

  }
  

  ngOnInit() {
  }

  logout() {
    GoogleAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
