import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
  userId: any;
  userName: any = 'Demo User';
  userImage: any = '../assets/img/logo.png';
  firstName: any = 'Demo';
  lastName: any = 'User';
  description: any = 'test description';
  socialData: any;

  constructor(
    route: ActivatedRoute,
    private common: CommonService,
    public api: ApiService,
  ) { 
     this.userId = route.snapshot.paramMap.get('userId');
  }

  ngOnInit() {
    this.fetchUserSocialData();
  }

  fetchUserSocialData() {
    this.common.presentLoading();
    this.api.post('getSocialData', { userId: this.userId }, '')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          const res: any = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.common.presentToast(errMsgs, 'danger');
          }
          else if (res.status === 200 || res.status === '200') {
            this.socialData = res.data;
            this.userImage = this.socialData.image;
            this.userName = this.socialData.username;
            this.firstName = this.socialData.first_name;
            this.lastName = this.socialData.last_name;
            this.description = this.socialData.description;
          }
        },
        (error) => {
          this.common.stopLoading();
        });
  }

}
