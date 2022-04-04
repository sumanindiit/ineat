import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  userData: any = JSON.parse(localStorage.getItem('ineat_userData'));

  addCardForm: FormGroup;
  submitcardAttempt: boolean = false;

  minDate: string = new Date().toISOString();
  maxData: any = (new Date()).getFullYear() + 10;

  constructor(public formBuilder: FormBuilder,
    private common: CommonService,
    public api: ApiService,
    public router: Router) {

  }

  ngOnInit() {
    this.addCardForm = this.formBuilder.group({
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      cardType: ['', [Validators.required]],
      cardExpiryMonth: ['', [Validators.required]],
      cardExpiryYear: ['', [Validators.required]],
      cardCvv: ['', [Validators.required]],
      default: ['']
    })
  }



  get erroraddCardCtr() {
    return this.addCardForm.controls;
  }

  onAddCardSubmit() {
    console.log('in on card submit');
    this.submitcardAttempt = true;
    if (!this.addCardForm.valid) {
      console.log('not valid');
      return false;
    } else {
      console.log('valid');
      this.common.presentLoading();
      let dict = this.addCardForm.value;
      dict['userId'] = this.userId;
      this.api.post('addCardInfo', dict, '')
        .subscribe(
          (result) => {
            this.submitcardAttempt = false;
            this.common.stopLoading();
            let res: any;
            res = result;
            if (res.status == 422) {
              var errMsgs = '';
              for (var i = 0; i < res.errors.length; i++) {
                var obj = res.errors[i];
                errMsgs += obj + '</br>';
              }

              this.common.presentToast(errMsgs, 'danger');

            }
            else if (res.status == 200) {
              this.common.presentToast('Card added Successfully!.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

}
