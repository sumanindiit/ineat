import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PostOptionsComponent } from '../post-options/post-options.component';
import { CommentFormPage } from '../comment-form/comment-form.page';
import { ApiService } from '../services/api/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { Share } from '@capacitor/share';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  tabs: string = "feed";
  userId: any = localStorage.getItem('ineat_userid');
  pageData: any;
  feeds: any;
  myGroups: any;
  explore: any;
  tabTitle: any = "Feed";

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController,
    public api: ApiService,
    private router: Router,
    private common: CommonService,

  ) { }

  ngOnInit() {

  }

  async shareFeed(feed: any) {
    await Share.share({
      title: feed?.post_content,
      text: feed?.post_content,
      url: feed?.post_url,
      dialogTitle: 'Share with..',
    }).then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing ::: ', error));
  }


  ionViewDidEnter() {
    this.getPageData();
  }

  toggleLiked(feed: any) {
    if (feed.icon === 'heart') {
      this.api.post('likeUnlikeSocialPost', { userId: this.userId, feedId: feed.post_id, likeStatus: 0 }, '').subscribe(
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
            console.log(res);
            //this.feeds = res.data;
            //this.myGroups = res.mygroups;
            //this.explore = res.exploregroups;

            feed.icon = 'heart-outline';
            this.getPageData();
          }
        },
        (error) => {
          this.common.stopLoading();
          this.common.presentToast('Somw error occured. Please try again.', 'danger');
        });
    } else {
      this.api.post('likeUnlikeSocialPost', { userId: this.userId, feedId: feed.post_id, likeStatus: 1 }, '').subscribe(
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
            console.log(res);
            //this.feeds = res.data;
            //this.myGroups = res.mygroups;
            //this.explore = res.exploregroups;

            feed.icon = 'heart';
            this.getPageData();
          }
        },
        (error) => {
          this.common.stopLoading();
          this.common.presentToast('Somw error occured. Please try again.', 'danger');
        });

    }
  }

  segmentChanged(ev: any) {
    switch (ev.detail.value) {
      case 'mybowls':
        this.tabTitle = 'My Groups';
        break;
      case 'explore':
        this.tabTitle = 'Explore Groups';
        break;
      case 'feed':
        this.tabTitle = 'Feed';
        break;
    }
  }

  getPageData() {
    //this.common.presentLoading();
    this.api.post('getSocialPageData', { userId: this.userId }, '')
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
            console.log(res);
            this.feeds = res.data;
            this.myGroups = res.mygroups;
            this.explore = res.exploregroups;
          }
        },
        (error) => {
          this.common.stopLoading();
          console.log(error);
        });
  }

  async presentCommentModal(feed: any) {
    const modal = await this.modalController.create({
      component: CommentFormPage,
      cssClass: 'commentformpage',
      componentProps: {
        userId: this.userId,
        feedId: feed.post_id
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getPageData();
    }


  }

  async presentPopover(ev: any, feed: any) {
    const popover = await this.popoverController.create({
      component: PostOptionsComponent,
      cssClass: ' postoptionsDropdown',
      mode: 'md',
      event: ev,
      translucent: true,
      componentProps: {
        userId: this.userId,
        feed: feed
      }
    });
    await popover.present();


    const { role } = await popover.onDidDismiss();

    console.log('onDidDismiss resolved with role', role);
  }

  joinBowl(bowl: any) {
    this.common.presentLoading();
    this.api.post('joinSocialBowl', { userId: this.userId, bowlId: bowl.id }, '')
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
            this.common.presentToast(res.errors, 'success');
            this.getPageData();
          }
        },
        (error) => {
          this.common.stopLoading();
          console.log(error);
        });
  }

}
