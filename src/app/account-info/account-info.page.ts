import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  tabs: string = "personal";
  userId: any = localStorage.getItem('ineat_userid');
  userData: any = JSON.parse(localStorage.getItem('ineat_userData'));
  updatePasswordForm: FormGroup;
  submitPasswordAttempt: boolean = false;
  cardData: any;
  selectedCard: any;

  constructor(public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    public router: Router) {

  }


  ngOnInit() {

    this.getCardsList();
    this.updatePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    })

  }

  get errorPasswordCtr() {
    return this.updatePasswordForm.controls;
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (updatePasswordForm: FormGroup): {
      [key: string]: any
    } => {
      let password = updatePasswordForm.controls[passwordKey];
      let confirmPassword = updatePasswordForm.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  onPasswordSubmit() {
    this.submitPasswordAttempt = true;

    if (!this.updatePasswordForm.valid) {
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.updatePasswordForm.value;
      dict['userId'] = this.userId;
      this.api.post('updatePassword', dict, '')
        .subscribe(
          (result) => {
            this.submitPasswordAttempt = false;
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
              localStorage.clear();
              this.router.navigate(['/login']);
              this.common.presentToast('Password Updated Successfully!. Please Log in.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

  getCardsList() {
    this.api.post('getUserCardList', { userId: this.userId }, '')
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
            this.cardData = res.data;
            this.selectedCard = res.selected_id;
            console.log(this.cardData);
          }
        },
        (error) => {
          console.log(error);
        });

  }

  deleteUserCard(cardId) {
    this.common.presentLoading();
    this.api.post('deleteUserCard', { userId: this.userId, cardId: cardId }, '')
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
            this.getCardsList();
            
          }
        },
        (error) => {
          this.common.stopLoading();
          console.log(error);
        });
  }


}
