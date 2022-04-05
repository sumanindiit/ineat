import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PostOptionsComponent } from '../post-options/post-options.component';
import { CommentFormPage } from '../comment-form/comment-form.page';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
tabs: string = "feed";
constructor(public modalController: ModalController  , public popoverController: PopoverController) { }


  ngOnInit() {

  }
  async presentCommentModal() {
    const modal = await this.modalController.create({
      component: CommentFormPage,
      cssClass: 'commentformpage'
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
	
    const popover = await this.popoverController.create({
      component: PostOptionsComponent,
      cssClass: ' postoptionsDropdown',
      mode: 'md',
      event: ev, 
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }  
}
