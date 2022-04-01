import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';
import { Router, NavigationExtras } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform ,isPlatform} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {FacebookLogin , FacebookLoginResponse} from "@capacitor-community/facebook-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logInForm: FormGroup;
  submitAttempt: boolean = false;
  passwordType: string = 'password';
  passwordIcon: string = 'show';
  fcmToken: any;
  fbtoken = null;
  fbUser:any;

  constructor(
    public formBuilder: FormBuilder,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    public platform: Platform,
    private menuController: MenuController,
    private http: HttpClient

  ) {
    this.menuController.enable(false);
    this.initializeApp();
  }


  initializeApp() {

    this.platform.ready().then(() => {
      if (localStorage.getItem('is_logged_in') == 'true') {
        this.router.navigate(['/tabs/home']);
      } 
    });


    if (this.platform.is('android')) {

    }
    else {

      this.platform.ready().then(() => {
        GoogleAuth.initialize({
          clientId: '2518286749-h6na61oh6nfltj51m78a387n8vqn9b4a.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        });

        FacebookLogin.initialize({appId: '1119584012173754'});
      })
    }
  }


  async doFbLogin()
  {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

    if (result.accessToken) {
      // Login successful.
      console.log(`Facebook access token is ${result.accessToken.token}`);
    }
  }


  goToHome(user) {
    let navigationExtras: NavigationExtras = { state: { user: user } };
    this.router.navigate(['/tabs/home'], navigationExtras);
  }

  async googleLogin() {
    const user = await GoogleAuth.signIn();
    if (user) { this.goToHome(user); }
  }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
    });
  }

  get errorCtr() {
    return this.logInForm.controls;
  }


  hideShowPassword() {
    console.log('clicked');
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'show' ? 'hide' : 'show';
  }

  onSubmit() {
    this.submitAttempt = true;
    if (!this.logInForm.valid) {
      this.common.presentToast('Please fill all required fields.', 'danger');
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.logInForm.value;
      this.api.post('login', dict, '')
        .subscribe(
          (result) => {
            this.submitAttempt = false;
            this.common.stopLoading();
            let res: any;
            res = result;
            if (res.status === 422 || res.status === '422') {
              let errMsgs = '';
              for (const x of res.errors) {
                errMsgs += x + '</br>';
              }
              this.common.presentToast(errMsgs, 'danger');
            }
            else if (res.status == 200) {
              localStorage.setItem('ineat_userData', JSON.stringify(res.data));
              var userId = this.api.encryptData(res.userId, config.ENC_SALT);
              localStorage.setItem('ineat_userid', res.userId);
              localStorage.setItem('ineat_token', userId);
              var userToken = res.token;
              localStorage.setItem('user_access_token', userToken);
              localStorage.setItem('is_logged_in', 'true');
              this.logInForm.reset()
              this.common.presentToast('Logged In Successfully!.', 'success');
              this.api.navCtrl.navigateRoot('/tabs/home');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

}
