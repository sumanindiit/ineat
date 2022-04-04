import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-refer-a-friend',
  templateUrl: './refer-a-friend.page.html',
  styleUrls: ['./refer-a-friend.page.scss'],
})
export class ReferAFriendPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  userData: any = JSON.parse(localStorage.getItem('ineat_userData'));
  referLink: any;
  userEmail: any;
  errors: any = ['', null, undefined];
  is_submit: Boolean = false;


  constructor(
    private common: CommonService,
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.fetchUserreference();
  }

  fetchUserreference() {
    this.common.presentLoading();
    this.api.post('getUserreferencelink', { userId: this.userId }, '')
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
            this.referLink = res.link;
          }
        },
        (error) => {
          this.common.stopLoading();
        });
  }

  copyLink(textToCopy) {
    const writeToClipboard = async () => {
      await Clipboard.write({
        string: textToCopy
      });
      this.common.presentToast('Copied Successfully.', 'success');
    };
  }

  sendInvite() {
    this.is_submit = true;

    if (this.errors.indexOf(this.userEmail) > 0) {
      return false;
    }
    else {
       this.common.presentLoading();
      this.api.post('sendInviteToUser', { userId: this.userId, userEmail: this.userEmail }, '')
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
              this.is_submit = false;
            }
            else if (res.status === 200 || res.status === '200') {
              this.common.presentToast('Invitation sent successfully.', 'success');
              this.userEmail = '';
              this.is_submit = false;
            }
          },
          (error) => {
            this.common.stopLoading();
            this.is_submit = false;
          });
    }
  }



}
