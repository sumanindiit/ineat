import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.page.html',
  styleUrls: ['./comment-form.page.scss'],
})
export class CommentFormPage implements OnInit {
  userId;
  feedId;

  commentForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    public modalCtrl: ModalController,
    private common: CommonService,
    public formBuilder: FormBuilder,
    public api: ApiService,
  ) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      commentDesc: ['', [Validators.required]],
    })
  }



  get erroraddCardCtr() {
    return this.commentForm.controls;
  }

  onAddCommentSubmit() {
    this.submitAttempt = true;
    if (!this.commentForm.valid) {
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.commentForm.value;
      dict['userId'] = this.userId;
      dict['feedId'] = this.feedId;
      this.api.post('addComment', dict, '')
        .subscribe(
          (result) => {
            this.submitAttempt = false;
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
              this.common.presentToast('Comment added Successfully!.', 'success');
              this.dismiss();
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
