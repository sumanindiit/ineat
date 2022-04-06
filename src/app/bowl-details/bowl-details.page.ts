import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-bowl-details',
  templateUrl: './bowl-details.page.html',
  styleUrls: ['./bowl-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BowlDetailsPage implements OnInit {
  tabs: string = "info";
  userId: any = localStorage.getItem('ineat_userid');
  pageData: any;
  bowlId: any;
  feeds: any;
  userData: any;
  errors: any = ['', null, undefined];

  constructor(
    route: ActivatedRoute,
    private common: CommonService,
    public api: ApiService,
  ) {
    this.bowlId = route.snapshot.paramMap.get('bowlId');
    this.userData = localStorage.getItem('ineat_userData');
  }

  ngOnInit() {
    this.getPageData();
  }

  getPageData() {
    this.common.presentLoading();
    this.api.post('getSingleBowl', { bowlId: this.bowlId, userId: this.userId }, '')
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
            this.feeds = res.data;
            this.pageData = res.info;
          }
        },
        (error) => {
          console.log(error);
        });
  }

}
