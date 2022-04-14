/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../util/global';
export * from './compiler_facade_interface';
export function getCompilerFacade() {
    const globalNg = global['ng'];
    if (!globalNg || !globalNg.ɵcompilerFacade) {
        throw new Error(`Angular JIT compilation failed: '@angular/compiler' not loaded!\n` +
            `  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n` +
            `  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n` +
            `  - Alternatively provide the compiler with 'import "@angular/compiler";' before bootstrapping.`);
    }
    return globalNg.ɵcompilerFacade;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvY29tcGlsZXIvY29tcGlsZXJfZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxjQUFjLDZCQUE2QixDQUFDO0FBRTVDLE1BQU0sVUFBVSxpQkFBaUI7SUFDL0IsTUFBTSxRQUFRLEdBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUMxQyxNQUFNLElBQUksS0FBSyxDQUNYLG1FQUFtRTtZQUNuRSwyRkFBMkY7WUFDM0Ysa0dBQWtHO1lBQ2xHLGlHQUFpRyxDQUFDLENBQUM7S0FDeEc7SUFDRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtnbG9iYWx9IGZyb20gJy4uL3V0aWwvZ2xvYmFsJztcbmltcG9ydCB7Q29tcGlsZXJGYWNhZGUsIEV4cG9ydGVkQ29tcGlsZXJGYWNhZGV9IGZyb20gJy4vY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBpbGVyX2ZhY2FkZV9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGlsZXJGYWNhZGUoKTogQ29tcGlsZXJGYWNhZGUge1xuICBjb25zdCBnbG9iYWxOZzogRXhwb3J0ZWRDb21waWxlckZhY2FkZSA9IGdsb2JhbFsnbmcnXTtcbiAgaWYgKCFnbG9iYWxOZyB8fCAhZ2xvYmFsTmcuybVjb21waWxlckZhY2FkZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFuZ3VsYXIgSklUIGNvbXBpbGF0aW9uIGZhaWxlZDogJ0Bhbmd1bGFyL2NvbXBpbGVyJyBub3QgbG9hZGVkIVxcbmAgK1xuICAgICAgICBgICAtIEpJVCBjb21waWxhdGlvbiBpcyBkaXNjb3VyYWdlZCBmb3IgcHJvZHVjdGlvbiB1c2UtY2FzZXMhIENvbnNpZGVyIEFPVCBtb2RlIGluc3RlYWQuXFxuYCArXG4gICAgICAgIGAgIC0gRGlkIHlvdSBib290c3RyYXAgdXNpbmcgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYycgb3IgJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic/XFxuYCArXG4gICAgICAgIGAgIC0gQWx0ZXJuYXRpdmVseSBwcm92aWRlIHRoZSBjb21waWxlciB3aXRoICdpbXBvcnQgXCJAYW5ndWxhci9jb21waWxlclwiOycgYmVmb3JlIGJvb3RzdHJhcHBpbmcuYCk7XG4gIH1cbiAgcmV0dXJuIGdsb2JhbE5nLsm1Y29tcGlsZXJGYWNhZGU7XG59XG4iXX0=