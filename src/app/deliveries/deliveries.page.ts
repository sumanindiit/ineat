import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.page.html',
  styleUrls: ['./deliveries.page.scss'],
})
export class DeliveriesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  pageData: any;
  userId: any = localStorage.getItem('ineat_userid');
  is_loaded: boolean = false;
  start: any;
  isMoreRecords: boolean = true;
  scrollEvent: any;
  recordsPerPage: any;
  allDeliveries: any;

  userData: any;
  constructor(
    private common: CommonService,
    public api: ApiService,
  ) {
    this.recordsPerPage = 10;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.start = 0;
    this.allDeliveries = [];
    this.common.presentLoading();
    this.getDeliveries({}, '0');
  }

  getDeliveries(event = {}, type = '', query = '') {
    if (type === '0') { }
    else {
      this.scrollEvent = event;
      if (type === '1') {
        this.start = this.start + this.recordsPerPage;
      }
    }
    var self = this;

    setTimeout(() => {
      self.api.post('fetchDeliveryDetails', {
        userId: this.userId, recordsPerPage: self.recordsPerPage, start: self.start, search: query
      }, '')
        .subscribe(
          (result) => {
            const res: any = result;
            if (res.status === 422 || res.status === '422') {
              let errMsgs = '';
              for (const x of res.errors) {
                errMsgs += x + '</br>';
              }
              self.common.presentToast(errMsgs, 'danger');
              self.is_loaded = true;
              this.pageData = [];
              self.common.stopLoading();

            }
            else if (res.status === 200 || res.status === '200') {
              var loaded_records = self.start + self.recordsPerPage;
              if (loaded_records >= res.total) {
                self.isMoreRecords = false;
              }

              self.allDeliveries = self.allDeliveries.concat(res.data);
              if (type === '0') {
                self.common.stopLoading();
              }
              else {
                if (type === '1') {
                  self.scrollEvent.target.complete();
                }
              }
              this.pageData = self.allDeliveries;
              this.is_loaded = false;
               
            }
            self.common.stopLoading();
          },
          (error) => {
            console.log(error);
            self.common.stopLoading();
          });
    }, 500);

  }

}
