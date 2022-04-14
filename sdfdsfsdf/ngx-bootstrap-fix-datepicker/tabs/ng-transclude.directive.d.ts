import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NgTranscludeDirective {
    viewRef: ViewContainerRef;
    protected _viewRef: ViewContainerRef;
    protected _ngTransclude: TemplateRef<any>;
    /* tslint:disable-next-line:no-any */
    ngTransclude: TemplateRef<any>;
    constructor(viewRef: ViewContainerRef);
}
