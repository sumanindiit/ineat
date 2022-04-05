import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PostOptionsComponent } from '../post-options/post-options.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
tabs: string = "feed";
constructor(public popoverController: PopoverController) { }


  ngOnInit() {
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
