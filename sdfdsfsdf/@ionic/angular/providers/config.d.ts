import { InjectionToken } from '@angular/core';
import { IonicConfig } from '@ionic/core';
import * as ɵngcc0 from '@angular/core';
export declare class Config {
    get(key: keyof IonicConfig, fallback?: any): any;
    getBoolean(key: keyof IonicConfig, fallback?: boolean): boolean;
    getNumber(key: keyof IonicConfig, fallback?: number): number;
    set(key: keyof IonicConfig, value?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Config, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Config>;
}
export declare const ConfigToken: InjectionToken<any>;

//# sourceMappingURL=config.d.ts.map