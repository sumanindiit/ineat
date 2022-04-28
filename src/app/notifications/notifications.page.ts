import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  userId: any = localStorage.getItem('ineat_userid');
  notificationData: any;
  is_loaded: boolean = false;

  constructor(
    public router: Router,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService
  ) {
    this.fetchUserSocialNotifications();
  }

  ngOnInit() {
  }

  fetchUserSocialNotifications() {
    this.api.post('fetchUserSocialNotifications', { userId: this.userId }, '')
      .subscribe(
        (result) => {
          const res: any = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.is_loaded = true;
            this.notificationData = [];
          }
          else if (res.status === 200 || res.status === '200') {
            this.notificationData = res.data;
            this.is_loaded = false;
          }
        },
        (error) => {
          console.log(error);
        });
  }

}
