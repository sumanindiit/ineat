import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentFormPageRoutingModule } from './comment-form-routing.module';

import { CommentFormPage } from './comment-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommentFormPageRoutingModule
  ],
  declarations: [CommentFormPage]
})
export class CommentFormPageModule {}
