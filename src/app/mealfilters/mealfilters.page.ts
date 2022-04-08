import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-mealfilters',
  templateUrl: './mealfilters.page.html',
  styleUrls: ['./mealfilters.page.scss'],
})
export class MealfiltersPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
