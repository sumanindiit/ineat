import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowl-details',
  templateUrl: './bowl-details.page.html',
  styleUrls: ['./bowl-details.page.scss'],
})
export class BowlDetailsPage implements OnInit {
tabs: string = "info";
  constructor() { }

  ngOnInit() {
  }

}
