import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-mealfilters',
  templateUrl: './mealfilters.page.html',
  styleUrls: ['./mealfilters.page.scss'],
})
export class MealfiltersPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  filterArray;
  allergensArray;
  difficultyLevel: any;
  ibsfilter: any;

  constructor(
    public modalController: ModalController,
    private common: CommonService,
    public api: ApiService,
  ) { }

  ngOnInit() { }

  getFilterValues() {
    const filteredVal = this.filterArray.filter(obj => obj.checked);
    const filteredAllergens = this.allergensArray.filter(obj => obj.checked);
    this.modalController.dismiss({
      'dismissed': true,
      'allergensArray': this.allergensArray,
      'filteredAllergen': filteredAllergens,
      'filterArray': this.filterArray,
      'filterFilters': filteredVal,
      'difficultyLevel': this.difficultyLevel
    });
  }

  clearfilterValues() {
    this.allergensArray.forEach(obj => obj.checked = false);
    this.filterArray.forEach(obj => obj.checked = false);
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
