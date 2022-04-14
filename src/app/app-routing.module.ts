import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'bowl-details/:bowlId',
    loadChildren: () => import('./bowl-details/bowl-details.module').then( m => m.BowlDetailsPageModule)
  },
  {
    path: 'add-bowl',
    loadChildren: () => import('./add-bowl/add-bowl.module').then( m => m.AddBowlPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'chat/:userId',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'order-summary',
    loadChildren: () => import('./order-summary/order-summary.module').then( m => m.OrderSummaryPageModule)
  },
  {
    path: 'confirm-modal',
    loadChildren: () => import('./confirm-modal/confirm-modal.module').then( m => m.ConfirmModalPageModule)
  },
  {
    path: 'meal-details/:mealId',
    loadChildren: () => import('./meal-details/meal-details.module').then( m => m.MealDetailsPageModule)
  },
  {
    path: 'order-placed',
    loadChildren: () => import('./order-placed/order-placed.module').then( m => m.OrderPlacedPageModule)
  },
  {
    path: 'deliveries',
    loadChildren: () => import('./deliveries/deliveries.module').then( m => m.DeliveriesPageModule)
  },
  {
    path: 'meals',
    loadChildren: () => import('./meals/meals.module').then( m => m.MealsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'account-info',
    loadChildren: () => import('./account-info/account-info.module').then( m => m.AccountInfoPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'edit-card',
    loadChildren: () => import('./edit-card/edit-card.module').then( m => m.EditCardPageModule)
  },
  {
    path: 'manage-subscription',
    loadChildren: () => import('./manage-subscription/manage-subscription.module').then( m => m.ManageSubscriptionPageModule)
  },
  {
    path: 'refer-a-friend',
    loadChildren: () => import('./refer-a-friend/refer-a-friend.module').then( m => m.ReferAFriendPageModule)
  },
  {
    path: 'add-group',
    loadChildren: () => import('./add-group/add-group.module').then( m => m.AddGroupPageModule)
  },
  {
    path: 'comment-form',
    loadChildren: () => import('./comment-form/comment-form.module').then( m => m.CommentFormPageModule)
  },
  {
    path: 'mealfilters',
    loadChildren: () => import('./mealfilters/mealfilters.module').then( m => m.MealfiltersPageModule)
  },
  {
    path: 'deliveries-holds',
    loadChildren: () => import('./deliveries-holds/deliveries-holds.module').then( m => m.DeliveriesHoldsPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'userprofile/:userId',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
