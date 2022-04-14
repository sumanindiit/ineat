// DIRECTIVES
export { BooleanValueAccessor } from './directives/control-value-accessors/boolean-value-accessor';
export { NumericValueAccessor } from './directives/control-value-accessors/numeric-value-accesssor';
export { RadioValueAccessor } from './directives/control-value-accessors/radio-value-accessor';
export { SelectValueAccessor } from './directives/control-value-accessors/select-value-accessor';
export { TextValueAccessor } from './directives/control-value-accessors/text-value-accessor';
export { IonTabs } from './directives/navigation/ion-tabs';
export { IonBackButtonDelegate } from './directives/navigation/ion-back-button';
export { NavDelegate } from './directives/navigation/nav-delegate';
export { IonRouterOutlet } from './directives/navigation/ion-router-outlet';
export { RouterLinkDelegate } from './directives/navigation/router-link-delegate';
export { NavParams } from './directives/navigation/nav-params';
export { IonVirtualScroll } from './directives/virtual-scroll/virtual-scroll';
export { VirtualItem } from './directives/virtual-scroll/virtual-item';
export { VirtualHeader } from './directives/virtual-scroll/virtual-header';
export { VirtualFooter } from './directives/virtual-scroll/virtual-footer';
export * from './directives/proxies';
// PROVIDERS
export { AngularDelegate } from './providers/angular-delegate';
export { ActionSheetController } from './providers/action-sheet-controller';
export { AlertController } from './providers/alert-controller';
export { LoadingController } from './providers/loading-controller';
export { MenuController } from './providers/menu-controller';
export { PickerController } from './providers/picker-controller';
export { ModalController } from './providers/modal-controller';
export { Platform } from './providers/platform';
export { PopoverController } from './providers/popover-controller';
export { ToastController } from './providers/toast-controller';
export { NavController } from './providers/nav-controller';
export { DomController } from './providers/dom-controller';
export { Config } from './providers/config';
export { AnimationController } from './providers/animation-controller';
export { GestureController } from './providers/gesture-controller';
// ROUTER STRATEGY
export { IonicRouteStrategy } from './util/ionic-router-reuse-strategy';
// PACKAGE MODULE
export { IonicModule } from './ionic-module';
// UTILS
export { IonicSafeString, getPlatforms, isPlatform, createAnimation } from '@ionic/core';
// CORE TYPES
export { mdTransitionAnimation, iosTransitionAnimation } from '@ionic/core';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsY0FBYyxzQkFBc0IsQ0FBQztBQUVyQyxZQUFZO0FBQ1osT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbkUsa0JBQWtCO0FBQ2xCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBS3hFLGlCQUFpQjtBQUNqQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsUUFBUTtBQUNSLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFekYsYUFBYTtBQUNiLE9BQU8sRUFBMksscUJBQXFCLEVBQUUsc0JBQXNCLEVBQXlCLE1BQU0sYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRElSRUNUSVZFU1xuZXhwb3J0IHsgQm9vbGVhblZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbC12YWx1ZS1hY2Nlc3NvcnMvYm9vbGVhbi12YWx1ZS1hY2Nlc3Nvcic7XG5leHBvcnQgeyBOdW1lcmljVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sLXZhbHVlLWFjY2Vzc29ycy9udW1lcmljLXZhbHVlLWFjY2Vzc3Nvcic7XG5leHBvcnQgeyBSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbC12YWx1ZS1hY2Nlc3NvcnMvcmFkaW8tdmFsdWUtYWNjZXNzb3InO1xuZXhwb3J0IHsgU2VsZWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sLXZhbHVlLWFjY2Vzc29ycy9zZWxlY3QtdmFsdWUtYWNjZXNzb3InO1xuZXhwb3J0IHsgVGV4dFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbC12YWx1ZS1hY2Nlc3NvcnMvdGV4dC12YWx1ZS1hY2Nlc3Nvcic7XG5leHBvcnQgeyBJb25UYWJzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdmlnYXRpb24vaW9uLXRhYnMnO1xuZXhwb3J0IHsgSW9uQmFja0J1dHRvbkRlbGVnYXRlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdmlnYXRpb24vaW9uLWJhY2stYnV0dG9uJztcbmV4cG9ydCB7IE5hdkRlbGVnYXRlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdmlnYXRpb24vbmF2LWRlbGVnYXRlJztcbmV4cG9ydCB7IElvblJvdXRlck91dGxldCB9IGZyb20gJy4vZGlyZWN0aXZlcy9uYXZpZ2F0aW9uL2lvbi1yb3V0ZXItb3V0bGV0JztcbmV4cG9ydCB7IFJvdXRlckxpbmtEZWxlZ2F0ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uYXZpZ2F0aW9uL3JvdXRlci1saW5rLWRlbGVnYXRlJztcbmV4cG9ydCB7IE5hdlBhcmFtcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9uYXZpZ2F0aW9uL25hdi1wYXJhbXMnO1xuZXhwb3J0IHsgSW9uVmlydHVhbFNjcm9sbCB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC92aXJ0dWFsLXNjcm9sbCc7XG5leHBvcnQgeyBWaXJ0dWFsSXRlbSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC92aXJ0dWFsLWl0ZW0nO1xuZXhwb3J0IHsgVmlydHVhbEhlYWRlciB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC92aXJ0dWFsLWhlYWRlcic7XG5leHBvcnQgeyBWaXJ0dWFsRm9vdGVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZpcnR1YWwtc2Nyb2xsL3ZpcnR1YWwtZm9vdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9wcm94aWVzJztcblxuLy8gUFJPVklERVJTXG5leHBvcnQgeyBBbmd1bGFyRGVsZWdhdGUgfSBmcm9tICcuL3Byb3ZpZGVycy9hbmd1bGFyLWRlbGVnYXRlJztcbmV4cG9ydCB7IEFjdGlvblNoZWV0Q29udHJvbGxlciB9IGZyb20gJy4vcHJvdmlkZXJzL2FjdGlvbi1zaGVldC1jb250cm9sbGVyJztcbmV4cG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJy4vcHJvdmlkZXJzL2FsZXJ0LWNvbnRyb2xsZXInO1xuZXhwb3J0IHsgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9sb2FkaW5nLWNvbnRyb2xsZXInO1xuZXhwb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tZW51LWNvbnRyb2xsZXInO1xuZXhwb3J0IHsgUGlja2VyQ29udHJvbGxlciB9IGZyb20gJy4vcHJvdmlkZXJzL3BpY2tlci1jb250cm9sbGVyJztcbmV4cG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJy4vcHJvdmlkZXJzL21vZGFsLWNvbnRyb2xsZXInO1xuZXhwb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuL3Byb3ZpZGVycy9wbGF0Zm9ybSc7XG5leHBvcnQgeyBQb3BvdmVyQ29udHJvbGxlciB9IGZyb20gJy4vcHJvdmlkZXJzL3BvcG92ZXItY29udHJvbGxlcic7XG5leHBvcnQgeyBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICcuL3Byb3ZpZGVycy90b2FzdC1jb250cm9sbGVyJztcbmV4cG9ydCB7IE5hdkNvbnRyb2xsZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9uYXYtY29udHJvbGxlcic7XG5leHBvcnQgeyBEb21Db250cm9sbGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvZG9tLWNvbnRyb2xsZXInO1xuZXhwb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9wcm92aWRlcnMvY29uZmlnJztcbmV4cG9ydCB7IEFuaW1hdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9hbmltYXRpb24tY29udHJvbGxlcic7XG5leHBvcnQgeyBHZXN0dXJlQ29udHJvbGxlciB9IGZyb20gJy4vcHJvdmlkZXJzL2dlc3R1cmUtY29udHJvbGxlcic7XG5cbi8vIFJPVVRFUiBTVFJBVEVHWVxuZXhwb3J0IHsgSW9uaWNSb3V0ZVN0cmF0ZWd5IH0gZnJvbSAnLi91dGlsL2lvbmljLXJvdXRlci1yZXVzZS1zdHJhdGVneSc7XG5cbi8vIFRZUEVTXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzL2lvbmljLWxpZmVjeWNsZS1ob29rcyc7XG5cbi8vIFBBQ0tBR0UgTU9EVUxFXG5leHBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJy4vaW9uaWMtbW9kdWxlJztcblxuLy8gVVRJTFNcbmV4cG9ydCB7IElvbmljU2FmZVN0cmluZywgZ2V0UGxhdGZvcm1zLCBpc1BsYXRmb3JtLCBjcmVhdGVBbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5cbi8vIENPUkUgVFlQRVNcbmV4cG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uQ2FsbGJhY2tPcHRpb25zLCBBbmltYXRpb25EaXJlY3Rpb24sIEFuaW1hdGlvbkZpbGwsIEFuaW1hdGlvbktleUZyYW1lcywgQW5pbWF0aW9uTGlmZWN5Y2xlLCBHZXN0dXJlLCBHZXN0dXJlQ29uZmlnLCBHZXN0dXJlRGV0YWlsLCBtZFRyYW5zaXRpb25BbmltYXRpb24sIGlvc1RyYW5zaXRpb25BbmltYXRpb24sIE5hdkNvbXBvbmVudFdpdGhQcm9wcyB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbiJdfQ==