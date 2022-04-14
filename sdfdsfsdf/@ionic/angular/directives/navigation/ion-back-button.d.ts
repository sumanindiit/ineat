import { AnimationBuilder } from '@ionic/core';
import { Config } from '../../providers/config';
import { NavController } from '../../providers/nav-controller';
import { IonRouterOutlet } from './ion-router-outlet';
import * as ɵngcc0 from '@angular/core';
export declare class IonBackButtonDelegate {
    private routerOutlet;
    private navCtrl;
    private config;
    defaultHref: string | undefined | null;
    routerAnimation?: AnimationBuilder;
    constructor(routerOutlet: IonRouterOutlet, navCtrl: NavController, config: Config);
    /**
     * @internal
     */
    onClick(ev: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonBackButtonDelegate, [{ optional: true; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<IonBackButtonDelegate, "ion-back-button", never, { "defaultHref": "defaultHref"; "routerAnimation": "routerAnimation"; }, {}, never>;
}

//# sourceMappingURL=ion-back-button.d.ts.map