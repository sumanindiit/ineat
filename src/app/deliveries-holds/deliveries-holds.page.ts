import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';

@Component({
  selector: 'app-deliveries-holds',
  templateUrl: './deliveries-holds.page.html',
  styleUrls: ['./deliveries-holds.page.scss'],
})
export class DeliveriesHoldsPage implements OnInit {
  date: string;
  type: 'string';
  holidayData: any;
  disabledWeeks: any;
  disabledDays: any;
  userId: any = localStorage.getItem('ineat_userid');
  fromDate: any;
  endDate: any;

  constructor(
    public modalCtrl: ModalController,
    private common: CommonService,
    public api: ApiService,
  ) { }

  ngOnInit() {
    this.fetchDeliveryHoldData();
  }

  fetchDeliveryHoldData() {
    this.common.presentLoading();
    this.api.post('fetchDeliveryHoldData', { userId: this.userId }, '')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          let res: any;
          res = result;
          console.table(res);
          this.holidayData = res.data.holiday_data;
          this.disabledWeeks = res.data.weekly_disable;
          this.disabledDays = res.data.dates_disable;

        },
        (error) => {
          this.common.stopLoading();
          this.common.presentToast('Got some error while processing this request.Please try again after sometime.', 'danger');
          console.log(error);
        });
  }

  deleteHoliday(holidayId) {
    console.log(holidayId);
  }

  async openFromCalendar() {
    let _daysConfig = [
      {
        date: new Date(2022, 4, 11),
        subTitle: 'disable',
        disable: true
      },
      {
        date: new Date(2022, 4, 12),
        subTitle: 'disable',
        disable: true
      }
    ];


    const options: CalendarModalOptions = {
      disableWeeks: [0, , 5, 2, 6],
      title: 'Select Date',
      defaultDate: new Date(),
      daysConfig: _daysConfig
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    this.fromDate = date.string;
  }
  async openEndCalendar() {
    let _daysConfig = [
      {
        date: new Date(2022, 4, 11),
        subTitle: 'disable',
        disable: true
      },
      {
        date: new Date(2022, 4, 12),
        subTitle: 'disable',
        disable: true
      }
    ];


    const options: CalendarModalOptions = {
      disableWeeks: [0, , 5, 2, 6],
      title: 'Select Date',
      defaultDate: new Date(),
      daysConfig: _daysConfig
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    this.endDate = date.string;

  }


  submitHoliday() {
    console.log(this.fromDate);
    console.log(this.endDate);
  }


}
