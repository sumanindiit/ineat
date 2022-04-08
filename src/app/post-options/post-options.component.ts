import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { PopoverController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-post-options',
  templateUrl: './post-options.component.html',
  styleUrls: ['./post-options.component.scss'],
})
export class PostOptionsComponent implements OnInit {
  feed;
  userId;

  constructor(
    private router: Router,
    public api: ApiService,
    public common: CommonService,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() { }

  shareViaEmail() {

  }

  async goToGroup() {
    await this.popoverController.dismiss();
    this.api.navCtrl.navigateRoot('/bowl-details/' + this.feed?.posted_group);
  }

  async copyLink() {
    console.log('function works.');
    await Clipboard.write({
      string: this.feed?.post_url
    });
    this.common.presentToast('Copied Successfully.', 'success');

    await this.popoverController.dismiss();
  }

}
