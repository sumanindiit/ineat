import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EmbeddedViewRef, IterableDiffer, IterableDiffers, NgZone, SimpleChanges, TrackByFunction } from '@angular/core';
import { ProxyCmp } from '../proxies-utils';
import { VirtualFooter } from './virtual-footer';
import { VirtualHeader } from './virtual-header';
import { VirtualItem } from './virtual-item';
var IonVirtualScroll = /** @class */ (function () {
    function IonVirtualScroll(z, iterableDiffers, elementRef) {
        this.z = z;
        this.iterableDiffers = iterableDiffers;
        this.refMap = new WeakMap();
        this.el = elementRef.nativeElement;
        this.el.nodeRender = this.nodeRender.bind(this);
    }
    IonVirtualScroll.prototype.ngOnChanges = function (changes) {
        if (this.trackBy && 'items' in changes) {
            // React on virtualScroll changes only once all inputs have been initialized
            var value = changes['items'].currentValue;
            if (this.differ === undefined && value != null) {
                try {
                    this.differ = this.iterableDiffers.find(value).create(this.trackBy);
                }
                catch (e) {
                    throw new Error("Cannot find a differ supporting object '" + value + "'. VirtualScroll only supports binding to Iterables such as Arrays.");
                }
            }
        }
    };
    IonVirtualScroll.prototype.ngDoCheck = function () {
        // and if there actually are changes
        var changes = this.differ !== undefined && this.items ? this.differ.diff(this.items) : null;
        if (changes === null) {
            return;
        }
        // TODO: optimize
        this.checkRange(0);
    };
    IonVirtualScroll.prototype.nodeRender = function (el, cell, index) {
        var _this = this;
        return this.z.run(function () {
            var node;
            if (!el) {
                node = _this.itmTmp.viewContainer.createEmbeddedView(_this.getComponent(cell.type), { $implicit: cell.value, index: index }, index);
                el = getElement(node);
                _this.refMap.set(el, node);
            }
            else {
                node = _this.refMap.get(el);
                var ctx = node.context;
                ctx.$implicit = cell.value;
                ctx.index = cell.index;
            }
            // run sync change detections
            node.detectChanges();
            return el;
        });
    };
    IonVirtualScroll.prototype.getComponent = function (type) {
        switch (type) {
            case 'item': return this.itmTmp.templateRef;
            case 'header': return this.hdrTmp.templateRef;
            case 'footer': return this.ftrTmp.templateRef;
        }
        throw new Error('template for virtual item was not provided');
    };
    IonVirtualScroll.ctorParameters = function () { return [
        { type: NgZone },
        { type: IterableDiffers },
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        ContentChild(VirtualItem, { static: false })
    ], IonVirtualScroll.prototype, "itmTmp", void 0);
    tslib_1.__decorate([
        ContentChild(VirtualHeader, { static: false })
    ], IonVirtualScroll.prototype, "hdrTmp", void 0);
    tslib_1.__decorate([
        ContentChild(VirtualFooter, { static: false })
    ], IonVirtualScroll.prototype, "ftrTmp", void 0);
    IonVirtualScroll = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['approxItemHeight', 'approxHeaderHeight', 'approxFooterHeight', 'headerFn', 'footerFn', 'items', 'itemHeight', 'headerHeight', 'footerHeight'],
            methods: ['checkEnd', 'checkRange', 'positionForItem']
        }),
        Component({
            selector: 'ion-virtual-scroll',
            template: '<ng-content></ng-content>',
            changeDetection: ChangeDetectionStrategy.OnPush,
            inputs: [
                'approxItemHeight',
                'approxHeaderHeight',
                'approxFooterHeight',
                'headerFn',
                'footerFn',
                'items',
                'itemHeight',
                'headerHeight',
                'footerHeight',
                'trackBy'
            ]
        })
    ], IonVirtualScroll);
    return IonVirtualScroll;
}());
export { IonVirtualScroll };
var getElement = function (view) {
    var rootNodes = view.rootNodes;
    for (var i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    throw new Error('virtual element was not created');
};
var ɵ0 = getElement;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2TCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnSTdDO0lBVUUsMEJBQ1UsQ0FBUyxFQUNULGVBQWdDLEVBQ3hDLFVBQXNCO1FBRmQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVJsQyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQWdELENBQUM7UUFXM0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBNEMsQ0FBQztRQUNsRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFO1lBQ3RDLDRFQUE0RTtZQUM1RSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzVDLElBQUksSUFBSSxD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YW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBOZ1pvbmUsIFNpbXBsZUNoYW5nZXMsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCwgQ2VsbFR5cGUsIEZvb3RlckhlaWdodEZuLCBIZWFkZXJGbiwgSGVhZGVySGVpZ2h0Rm4sIEl0ZW1IZWlnaHRGbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuaW1wb3J0IHsgUHJveHlDbXAgfSBmcm9tICcuLi9wcm94aWVzLXV0aWxzJztcblxuaW1wb3J0IHsgVmlydHVhbEZvb3RlciB9IGZyb20gJy4vdmlydHVhbC1mb290ZXInO1xuaW1wb3J0IHsgVmlydHVhbEhlYWRlciB9IGZyb20gJy4vdmlydHVhbC1oZWFkZXInO1xuaW1wb3J0IHsgVmlydHVhbEl0ZW0gfSBmcm9tICcuL3ZpcnR1YWwtaXRlbSc7XG5pbXBvcnQgeyBWaXJ0dWFsQ29udGV4dCB9IGZyb20gJy4vdmlydHVhbC11dGlscyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25WaXJ0dWFsU2Nyb2xsIHtcbiAgLyoqXG4gICAqIEl0IGlzIGltcG9ydGFudCB0byBwcm92aWRlIHRoaXNcbiAgICogaWYgdmlydHVhbCBpdGVtIGhlaWdodCB3aWxsIGJlIHNpZ25pZmljYW50bHkgbGFyZ2VyIHRoYW4gdGhlIGRlZmF1bHRcbiAgICogVGhlIGFwcHJveGltYXRlIGhlaWdodCBvZiBlYWNoIHZpcnR1YWwgaXRlbSB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAqIFRoaXMgZGltZW5zaW9uIGlzIHVzZWQgdG8gaGVscCBkZXRlcm1pbmUgaG93IG1hbnkgY2VsbHMgc2hvdWxkXG4gICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCB0aGUgYWN0dWFsIHJlbmRlcmVkIHNpemUgb2YgZWFjaCBjZWxsIGNvbWVzIGZyb20gdGhlXG4gICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgKi9cbiAgYXBwcm94SXRlbUhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgYXBwcm94aW1hdGUgaGVpZ2h0IG9mIGVhY2ggaGVhZGVyIHRlbXBsYXRlJ3MgY2VsbC5cbiAgICogVGhpcyBkaW1lbnNpb24gaXMgdXNlZCB0byBoZWxwIGRldGVybWluZSBob3cgbWFueSBjZWxscyBzaG91bGRcbiAgICogYmUgY3JlYXRlZCB3aGVuIGluaXRpYWxpemVkLCBhbmQgdG8gaGVscCBjYWxjdWxhdGUgdGhlIGhlaWdodCBvZlxuICAgKiB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBUaGlzIGhlaWdodCB2YWx1ZSBjYW4gb25seSB1c2UgYHB4YCB1bml0cy5cbiAgICogTm90ZSB0aGF0IHRoZSBhY3R1YWwgcmVuZGVyZWQgc2l6ZSBvZiBlYWNoIGNlbGwgY29tZXMgZnJvbSB0aGVcbiAgICogYXBwJ3MgQ1NTLCB3aGVyZWFzIHRoaXMgYXBwcm94aW1hdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2FsY3VsYXRlXG4gICAqIGluaXRpYWwgZGltZW5zaW9ucyBiZWZvcmUgdGhlIGl0ZW0gaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAqL1xuICBhcHByb3hIZWFkZXJIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGFwcHJveGltYXRlIHdpZHRoIG9mIGVhY2ggZm9vdGVyIHRlbXBsYXRlJ3MgY2VsbC5cbiAgICogVGhpcyBkaW1lbnNpb24gaXMgdXNlZCB0byBoZWxwIGRldGVybWluZSBob3cgbWFueSBjZWxscyBzaG91bGRcbiAgICogYmUgY3JlYXRlZCB3aGVuIGluaXRpYWxpemVkLCBhbmQgdG8gaGVscCBjYWxjdWxhdGUgdGhlIGhlaWdodCBvZlxuICAgKiB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBUaGlzIGhlaWdodCB2YWx1ZSBjYW4gb25seSB1c2UgYHB4YCB1bml0cy5cbiAgICogTm90ZSB0aGF0IHRoZSBhY3R1YWwgcmVuZGVyZWQgc2l6ZSBvZiBlYWNoIGNlbGwgY29tZXMgZnJvbSB0aGVcbiAgICogYXBwJ3MgQ1NTLCB3aGVyZWFzIHRoaXMgYXBwcm94aW1hdGlvbiBpcyB1c2VkIHRvIGhlbHAgY2FsY3VsYXRlXG4gICAqIGluaXRpYWwgZGltZW5zaW9ucyBiZWZvcmUgdGhlIGl0ZW0gaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAqL1xuICBhcHByb3hGb290ZXJIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2VjdGlvbiBoZWFkZXJzIGFuZCB0aGUgZGF0YSB1c2VkIHdpdGhpbiBpdHMgZ2l2ZW5cbiAgICogdGVtcGxhdGUgY2FuIGJlIGR5bmFtaWNhbGx5IGNyZWF0ZWQgYnkgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIGBoZWFkZXJGbmAuXG4gICAqIEZvciBleGFtcGxlLCBhIGxhcmdlIGxpc3Qgb2YgY29udGFjdHMgdXN1YWxseSBoYXMgZGl2aWRlcnMgYmV0d2VlbiBlYWNoXG4gICAqIGxldHRlciBpbiB0aGUgYWxwaGFiZXQuIEFwcCdzIGNhbiBwcm92aWRlIHRoZWlyIG93biBjdXN0b20gYGhlYWRlckZuYFxuICAgKiB3aGljaCBpcyBjYWxsZWQgd2l0aCBlYWNoIHJlY29yZCB3aXRoaW4gdGhlIGRhdGFzZXQuIFRoZSBsb2dpYyB3aXRoaW5cbiAgICogdGhlIGhlYWRlciBmdW5jdGlvbiBjYW4gZGVjaWRlIGlmIHRoZSBoZWFkZXIgdGVtcGxhdGUgc2hvdWxkIGJlIHVzZWQsXG4gICAqIGFuZCB3aGF0IGRhdGEgdG8gZ2l2ZSB0byB0aGUgaGVhZGVyIHRlbXBsYXRlLiBUaGUgZnVuY3Rpb24gbXVzdCByZXR1cm5cbiAgICogYG51bGxgIGlmIGEgaGVhZGVyIGNlbGwgc2hvdWxkbid0IGJlIGNyZWF0ZWQuXG4gICAqL1xuICBoZWFkZXJGbj86IEhlYWRlckZuO1xuXG4gIC8qKlxuICAgKiBTZWN0aW9uIGZvb3RlcnMgYW5kIHRoZSBkYXRhIHVzZWQgd2l0aGluIGl0cyBnaXZlblxuICAgKiB0ZW1wbGF0ZSBjYW4gYmUgZHluYW1pY2FsbHkgY3JlYXRlZCBieSBwYXNzaW5nIGEgZnVuY3Rpb24gdG8gYGZvb3RlckZuYC5cbiAgICogVGhlIGxvZ2ljIHdpdGhpbiB0aGUgZm9vdGVyIGZ1bmN0aW9uIGNhbiBkZWNpZGUgaWYgdGhlIGZvb3RlciB0ZW1wbGF0ZVxuICAgKiBzaG91bGQgYmUgdXNlZCwgYW5kIHdoYXQgZGF0YSB0byBnaXZlIHRvIHRoZSBmb290ZXIgdGVtcGxhdGUuIFRoZSBmdW5jdGlvblxuICAgKiBtdXN0IHJldHVybiBgbnVsbGAgaWYgYSBmb290ZXIgY2VsbCBzaG91bGRuJ3QgYmUgY3JlYXRlZC5cbiAgICovXG4gIGZvb3RlckZuPzogSGVhZGVyRm47XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgYnVpbGRzIHRoZSB0ZW1wbGF0ZXMgd2l0aGluIHRoZSB2aXJ0dWFsIHNjcm9sbC5cbiAgICogSXQncyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdoZW4gdGhpcyBkYXRhIGhhcyBjaGFuZ2VkLCB0aGVuIHRoZVxuICAgKiBlbnRpcmUgdmlydHVhbCBzY3JvbGwgaXMgcmVzZXQsIHdoaWNoIGlzIGFuIGV4cGVuc2l2ZSBvcGVyYXRpb24gYW5kXG4gICAqIHNob3VsZCBiZSBhdm9pZGVkIGlmIHBvc3NpYmxlLlxuICAgKi9cbiAgaXRlbXM/OiBhbnlbXTtcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBtYXBzIGVhY2ggaXRlbSB3aXRoaW4gdGhlaXIgaGVpZ2h0LlxuICAgKiBXaGVuIHRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIGhlYXZ5IG9wdGltaXphdGlvbnMgYW5kIGZhc3QgcGF0aCBjYW4gYmUgdGFrZWQgYnlcbiAgICogYGlvbi12aXJ0dWFsLXNjcm9sbGAgbGVhZGluZyB0byBtYXNzaXZlIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50cy5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdG8gc2tpcCBhbGwgRE9NIHJlYWRzLCB3aGljaCBjYW4gYmUgRG9pbmcgc28gbGVhZHNcbiAgICogdG8gbWFzc2l2ZSBwZXJmb3JtYW5jZVxuICAgKi9cbiAgaXRlbUhlaWdodD86IEl0ZW1IZWlnaHRGbjtcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBtYXBzIGVhY2ggaXRlbSBoZWFkZXIgd2l0aGluIHRoZWlyIGhlaWdodC5cbiAgICovXG4gIGhlYWRlckhlaWdodD86IEhlYWRlckhlaWdodEZuO1xuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IG1hcHMgZWFjaCBpdGVtIGZvb3RlciB3aXRoaW4gdGhlaXIgaGVpZ2h0LlxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogRm9vdGVySGVpZ2h0Rm47XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMgYG5nRm9yVHJhY2tCeWAgd2hpY2ggY2FuIGJlIHVzZWQgb24gYG5nRm9yYC5cbiAgICovXG4gIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBtYXJrcyB0aGUgdGFpbCB0aGUgaXRlbXMgYXJyYXkgYXMgZGlydHksIHNvIHRoZXkgY2FuIGJlIHJlLXJlbmRlcmVkLiAgSXQncyBlcXVpdmFsZW50IHRvIGNhbGxpbmc6ICBgYGBqcyAgICAqIHZpcnR1YWxTY3JvbGwuY2hlY2tSYW5nZShsYXN0SXRlbUxlbiwgaXRlbXMubGVuZ3RoIC0gbGFzdEl0ZW1MZW4pOyAgICAqIGBgYFxuICAgKi9cbiAgJ2NoZWNrRW5kJzogKCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIG1hcmtzIGEgc3Vic2V0IG9mIGl0ZW1zIGFzIGRpcnR5LCBzbyB0aGV5IGNhbiBiZSByZS1yZW5kZXJlZC4gSXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBkaXJ0eSBhbnkgdGltZSB0aGUgY29udGVudCBvciB0aGVpciBzdHlsZSBjaGFuZ2VzLiAgVGhlIHN1YnNldCBvZiBpdGVtcyB0byBiZSB1cGRhdGVkIGNhbiBhcmUgc3BlY2lmaW5nIGJ5IGFuIG9mZnNldCBhbmQgYSBsZW5ndGguXG4gICAqL1xuICAnY2hlY2tSYW5nZSc6IChvZmZzZXQ6IG51bWJlciwgbGVuPzogbnVtYmVyKSA9PiB2b2lkO1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIHZpcnR1YWwgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAqL1xuICAncG9zaXRpb25Gb3JJdGVtJzogKGluZGV4OiBudW1iZXIpID0+IFByb21pc2U8bnVtYmVyPjtcbn1cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FwcHJveEl0ZW1IZWlnaHQnLCAnYXBwcm94SGVhZGVySGVpZ2h0JywgJ2FwcHJveEZvb3RlckhlaWdodCcsICdoZWFkZXJGbicsICdmb290ZXJGbicsICdpdGVtcycsICdpdGVtSGVpZ2h0JywgJ2hlYWRlckhlaWdodCcsICdmb290ZXJIZWlnaHQnXSxcbiAgbWV0aG9kczogWydjaGVja0VuZCcsICdjaGVja1JhbmdlJywgJ3Bvc2l0aW9uRm9ySXRlbSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLXZpcnR1YWwtc2Nyb2xsJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdhcHByb3hJdGVtSGVpZ2h0JyxcbiAgICAnYXBwcm94SGVhZGVySGVpZ2h0JyxcbiAgICAnYXBwcm94Rm9vdGVySGVpZ2h0JyxcbiAgICAnaGVhZGVyRm4nLFxuICAgICdmb290ZXJGbicsXG4gICAgJ2l0ZW1zJyxcbiAgICAnaXRlbUhlaWdodCcsXG4gICAgJ2hlYWRlckhlaWdodCcsXG4gICAgJ2Zvb3RlckhlaWdodCcsXG4gICAgJ3RyYWNrQnknXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW9uVmlydHVhbFNjcm9sbCB7XG5cbiAgcHJpdmF0ZSBkaWZmZXI/OiBJdGVyYWJsZURpZmZlcjxhbnk+O1xuICBwcml2YXRlIGVsOiBIVE1MSW9uVmlydHVhbFNjcm9sbEVsZW1lbnQ7XG4gIHByaXZhdGUgcmVmTWFwID0gbmV3IFdlYWtNYXA8SFRNTEVsZW1lbnQsIEVtYmVkZGVkVmlld1JlZjxWaXJ0dWFsQ29udGV4dD4+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChWaXJ0dWFsSXRlbSwgeyBzdGF0aWM6IGZhbHNlIH0pIGl0bVRtcCE6IFZpcnR1YWxJdGVtO1xuICBAQ29udGVudENoaWxkKFZpcnR1YWxIZWFkZXIsIHsgc3RhdGljOiBmYWxzZSB9KSBoZHJUbXAhOiBWaXJ0dWFsSGVhZGVyO1xuICBAQ29udGVudENoaWxkKFZpcnR1YWxGb290ZXIsIHsgc3RhdGljOiBmYWxzZSB9KSBmdHJUbXAhOiBWaXJ0dWFsRm9vdGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgejogTmdab25lLFxuICAgIHByaXZhdGUgaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW9uVmlydHVhbFNjcm9sbEVsZW1lbnQ7XG4gICAgdGhpcy5lbC5ub2RlUmVuZGVyID0gdGhpcy5ub2RlUmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJhY2tCeSAmJiAnaXRlbXMnIGluIGNoYW5nZXMpIHtcbiAgICAgIC8vIFJlYWN0IG9uIHZpcnR1YWxTY3JvbGwgY2hhbmdlcyBvbmx5IG9uY2UgYWxsIGlucHV0cyBoYXZlIGJlZW4gaW5pdGlhbGl6ZWRcbiAgICAgIGNvbnN0IHZhbHVlID0gY2hhbmdlc1snaXRlbXMnXS5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAodGhpcy5kaWZmZXIgPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5kaWZmZXIgPSB0aGlzLml0ZXJhYmxlRGlmZmVycy5maW5kKHZhbHVlKS5jcmVhdGUodGhpcy50cmFja0J5KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBDYW5ub3QgZmluZCBhIGRpZmZlciBzdXBwb3J0aW5nIG9iamVjdCAnJHt2YWx1ZX0nLiBWaXJ0dWFsU2Nyb2xsIG9ubHkgc3VwcG9ydHMgYmluZGluZyB0byBJdGVyYWJsZXMgc3VjaCBhcyBBcnJheXMuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgLy8gYW5kIGlmIHRoZXJlIGFjdHVhbGx5IGFyZSBjaGFuZ2VzXG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGlmZmVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pdGVtcyA/IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5pdGVtcykgOiBudWxsO1xuICAgIGlmIChjaGFuZ2VzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRPRE86IG9wdGltaXplXG4gICAgdGhpcy5jaGVja1JhbmdlKDApO1xuICB9XG5cbiAgcHJpdmF0ZSBub2RlUmVuZGVyKGVsOiBIVE1MRWxlbWVudCB8IG51bGwsIGNlbGw6IENlbGwsIGluZGV4OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuei5ydW4oKCkgPT4ge1xuICAgICAgbGV0IG5vZGU6IEVtYmVkZGVkVmlld1JlZjxWaXJ0dWFsQ29udGV4dD47XG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLml0bVRtcC52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjZWxsLnR5cGUpLFxuICAgICAgICAgIHsgJGltcGxpY2l0OiBjZWxsLnZhbHVlLCBpbmRleCB9LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICk7XG4gICAgICAgIGVsID0gZ2V0RWxlbWVudChub2RlKTtcbiAgICAgICAgdGhpcy5yZWZNYXAuc2V0KGVsLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLnJlZk1hcC5nZXQoZWwpITtcbiAgICAgICAgY29uc3QgY3R4ID0gbm9kZS5jb250ZXh0O1xuICAgICAgICBjdHguJGltcGxpY2l0ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgY3R4LmluZGV4ID0gY2VsbC5pbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIHJ1biBzeW5jIGNoYW5nZSBkZXRlY3Rpb25zXG4gICAgICBub2RlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50KHR5cGU6IENlbGxUeXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpdGVtJzogcmV0dXJuIHRoaXMuaXRtVG1wLnRlbXBsYXRlUmVmO1xuICAgICAgY2FzZSAnaGVhZGVyJzogcmV0dXJuIHRoaXMuaGRyVG1wLnRlbXBsYXRlUmVmO1xuICAgICAgY2FzZSAnZm9vdGVyJzogcmV0dXJuIHRoaXMuZnRyVG1wLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RlbXBsYXRlIGZvciB2aXJ0dWFsIGl0ZW0gd2FzIG5vdCBwcm92aWRlZCcpO1xuICB9XG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSAodmlldzogRW1iZWRkZWRWaWV3UmVmPFZpcnR1YWxDb250ZXh0Pik6IEhUTUxFbGVtZW50ID0+IHtcbiAgY29uc3Qgcm9vdE5vZGVzID0gdmlldy5yb290Tm9kZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJvb3ROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJvb3ROb2Rlc1tpXTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd2aXJ0dWFsIGVsZW1lbnQgd2FzIG5vdCBjcmVhdGVkJyk7XG59O1xuIl19