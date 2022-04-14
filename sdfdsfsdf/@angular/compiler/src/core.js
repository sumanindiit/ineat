/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/core", ["require", "exports", "tslib", "@angular/compiler/src/selector"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseSelectorToR3Selector = exports.MissingTranslationStrategy = exports.SecurityContext = exports.Type = exports.createHost = exports.createSkipSelf = exports.createSelf = exports.createOptional = exports.NO_ERRORS_SCHEMA = exports.CUSTOM_ELEMENTS_SCHEMA = exports.createInjectable = exports.createNgModule = exports.createHostListener = exports.createHostBinding = exports.createOutput = exports.createInput = exports.createPipe = exports.createComponent = exports.ChangeDetectionStrategy = exports.ViewEncapsulation = exports.createDirective = exports.createViewChild = exports.createViewChildren = exports.createContentChild = exports.createContentChildren = exports.emitDistinctChangesOnlyDefaultValue = exports.createAttribute = exports.createInjectionToken = exports.createInject = void 0;
    var tslib_1 = require("tslib");
    // Attention:
    // This file duplicates types and values from @angular/core
    // so that we are able to make @angular/compiler independent of @angular/core.
    // This is important to prevent a build cycle, as @angular/core needs to
    // be compiled with the compiler.
    var selector_1 = require("@angular/compiler/src/selector");
    exports.createInject = makeMetadataFactory('Inject', function (token) { return ({ token: token }); });
    exports.createInjectionToken = makeMetadataFactory('InjectionToken', function (desc) { return ({ _desc: desc, ɵprov: undefined }); });
    exports.createAttribute = makeMetadataFactory('Attribute', function (attributeName) { return ({ attributeName: attributeName }); });
    // Stores the default value of `emitDistinctChangesOnly` when the `emitDistinctChangesOnly` is not
    // explicitly set. This value will be changed to `true` in v12.
    // TODO(misko): switch the default in v12 to `true`. See: packages/core/src/metadata/di.ts
    exports.emitDistinctChangesOnlyDefaultValue = false;
    exports.createContentChildren = makeMetadataFactory('ContentChildren', function (selector, data) {
        if (data === void 0) { data = {}; }
        return (tslib_1.__assign({ selector: selector, first: false, isViewQuery: false, descendants: false, emitDistinctChangesOnly: exports.emitDistinctChangesOnlyDefaultValue }, data));
    });
    exports.createContentChild = makeMetadataFactory('ContentChild', function (selector, data) {
        if (data === void 0) { data = {}; }
        return (tslib_1.__assign({ selector: selector, first: true, isViewQuery: false, descendants: true }, data));
    });
    exports.createViewChildren = makeMetadataFactory('ViewChildren', function (selector, data) {
        if (data === void 0) { data = {}; }
        return (tslib_1.__assign({ selector: selector, first: false, isViewQuery: true, descendants: true, emitDistinctChangesOnly: exports.emitDistinctChangesOnlyDefaultValue }, data));
    });
    exports.createViewChild = makeMetadataFactory('ViewChild', function (selector, data) {
        return (tslib_1.__assign({ selector: selector, first: true, isViewQuery: true, descendants: true }, data));
    });
    exports.createDirective = makeMetadataFactory('Directive', function (dir) {
        if (dir === void 0) { dir = {}; }
        return dir;
    });
    var ViewEncapsulation;
    (function (ViewEncapsulation) {
        ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
        // Historically the 1 value was for `Native` encapsulation which has been removed as of v11.
        ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
        ViewEncapsulation[ViewEncapsulation["ShadowDom"] = 3] = "ShadowDom";
    })(ViewEncapsulation = exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
    var ChangeDetectionStrategy;
    (function (ChangeDetectionStrategy) {
        ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
        ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
    })(ChangeDetectionStrategy = exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
    exports.createComponent = makeMetadataFactory('Component', function (c) {
        if (c === void 0) { c = {}; }
        return (tslib_1.__assign({ changeDetection: ChangeDetectionStrategy.Default }, c));
    });
    exports.createPipe = makeMetadataFactory('Pipe', function (p) { return (tslib_1.__assign({ pure: true }, p)); });
    exports.createInput = makeMetadataFactory('Input', function (bindingPropertyName) { return ({ bindingPropertyName: bindingPropertyName }); });
    exports.createOutput = makeMetadataFactory('Output', function (bindingPropertyName) { return ({ bindingPropertyName: bindingPropertyName }); });
    exports.createHostBinding = makeMetadataFactory('HostBinding', function (hostPropertyName) { return ({ hostPropertyName: hostPropertyName }); });
    exports.createHostListener = makeMetadataFactory('HostListener', function (eventName, args) { return ({ eventName: eventName, args: args }); });
    exports.createNgModule = makeMetadataFactory('NgModule', function (ngModule) { return ngModule; });
    exports.createInjectable = makeMetadataFactory('Injectable', function (injectable) {
        if (injectable === void 0) { injectable = {}; }
        return injectable;
    });
    exports.CUSTOM_ELEMENTS_SCHEMA = {
        name: 'custom-elements'
    };
    exports.NO_ERRORS_SCHEMA = {
        name: 'no-errors-schema'
    };
    exports.createOptional = makeMetadataFactory('Optional');
    exports.createSelf = makeMetadataFactory('Self');
    exports.createSkipSelf = makeMetadataFactory('SkipSelf');
    exports.createHost = makeMetadataFactory('Host');
    exports.Type = Function;
    var SecurityContext;
    (function (SecurityContext) {
        SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
        SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
        SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
        SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
        SecurityContext[SecurityContext["URL"] = 4] = "URL";
        SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
    })(SecurityContext = exports.SecurityContext || (exports.SecurityContext = {}));
    var MissingTranslationStrategy;
    (function (MissingTranslationStrategy) {
        MissingTranslationStrategy[MissingTranslationStrategy["Error"] = 0] = "Error";
        MissingTranslationStrategy[MissingTranslationStrategy["Warning"] = 1] = "Warning";
        MissingTranslationStrategy[MissingTranslationStrategy["Ignore"] = 2] = "Ignore";
    })(MissingTranslationStrategy = exports.MissingTranslationStrategy || (exports.MissingTranslationStrategy = {}));
    function makeMetadataFactory(name, props) {
        // This must be declared as a function, not a fat arrow, so that ES2015 devmode produces code
        // that works with the static_reflector.ts in the ViewEngine compiler.
        // In particular, `_registerDecoratorOrConstructor` assumes that the value returned here can be
        // new'ed.
        function factory() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var values = props ? props.apply(void 0, tslib_1.__spread(args)) : {};
            return tslib_1.__assign({ ngMetadataName: name }, values);
        }
        factory.isTypeOf = function (obj) { return obj && obj.ngMetadataName === name; };
        factory.ngMetadataName = name;
        return factory;
    }
    function parserSelectorToSimpleSelector(selector) {
        var classes = selector.classNames && selector.classNames.length ? tslib_1.__spread([8 /* CLASS */], selector.classNames) :
            [];
        var elementName = selector.element && selector.element !== '*' ? selector.element : '';
        return tslib_1.__spread([elementName], selector.attrs, classes);
    }
    function parserSelectorToNegativeSelector(selector) {
        var classes = selector.classNames && selector.classNames.length ? tslib_1.__spread([8 /* CLASS */], selector.classNames) :
            [];
        if (selector.element) {
            return tslib_1.__spread([
                1 /* NOT */ | 4 /* ELEMENT */, selector.element
            ], selector.attrs, classes);
        }
        else if (selector.attrs.length) {
            return tslib_1.__spread([1 /* NOT */ | 2 /* ATTRIBUTE */], selector.attrs, classes);
        }
        else {
            return selector.classNames && selector.classNames.length ? tslib_1.__spread([1 /* NOT */ | 8 /* CLASS */], selector.classNames) :
                [];
        }
    }
    function parserSelectorToR3Selector(selector) {
        var positive = parserSelectorToSimpleSelector(selector);
        var negative = selector.notSelectors && selector.notSelectors.length ?
            selector.notSelectors.map(function (notSelector) { return parserSelectorToNegativeSelector(notSelector); }) :
            [];
        return positive.concat.apply(positive, tslib_1.__spread(negative));
    }
    function parseSelectorToR3Selector(selector) {
        return selector ? selector_1.CssSelector.parse(selector).map(parserSelectorToR3Selector) : [];
    }
    exports.parseSelectorToR3Selector = parseSelectorToR3Selector;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFFSCxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELDhFQUE4RTtJQUM5RSx3RUFBd0U7SUFDeEUsaUNBQWlDO0lBRWpDLDJEQUF1QztJQUsxQixRQUFBLFlBQVksR0FBRyxtQkFBbUIsQ0FBUyxRQUFRLEVBQUUsVUFBQyxLQUFVLElBQUssT0FBQSxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQ2hGLFFBQUEsb0JBQW9CLEdBQUcsbUJBQW1CLENBQ25ELGdCQUFnQixFQUFFLFVBQUMsSUFBWSxJQUFLLE9BQUEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUs5RCxRQUFBLGVBQWUsR0FDeEIsbUJBQW1CLENBQVksV0FBVyxFQUFFLFVBQUMsYUFBcUIsSUFBSyxPQUFBLENBQUMsRUFBQyxhQUFhLGVBQUEsRUFBQyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUU5RixrR0FBa0c7SUFDbEcsK0RBQStEO0lBQy9ELDBGQUEwRjtJQUM3RSxRQUFBLG1DQUFtQyxHQUFHLEtBQUssQ0FBQztJQWE1QyxRQUFBLHFCQUFxQixHQUFHLG1CQUFtQixDQUNwRCxpQkFBaUIsRUFBRSxVQUFDLFFBQWMsRUFBRSxJQUFjO1FBQWQscUJBQUEsRUFBQSxTQUFjO1FBQUssT0FBQSxvQkFDbEMsUUFBUSxVQUFBLEVBQ1IsS0FBSyxFQUFFLEtBQUssRUFDWixXQUFXLEVBQUUsS0FBSyxFQUNsQixXQUFXLEVBQUUsS0FBSyxFQUNsQix1QkFBdUIsRUFBRSwyQ0FBbUMsSUFDekQsSUFBSSxFQUNQO0lBUGtDLENBT2xDLENBQUMsQ0FBQztJQUNkLFFBQUEsa0JBQWtCLEdBQUcsbUJBQW1CLENBQ2pELGNBQWMsRUFDZCxVQUFDLFFBQWMsRUFBRSxJQUFjO1FBQWQscUJBQUEsRUFBQSxTQUFjO1FBQzNCLE9BQUEsb0JBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUssSUFBSSxFQUFFO0lBQXpFLENBQXlFLENBQUMsQ0FBQztJQUN0RSxRQUFBLGtCQUFrQixHQUFHLG1CQUFtQixDQUNqRCxjQUFjLEVBQUUsVUFBQyxRQUFjLEVBQUUsSUFBYztRQUFkLHFCQUFBLEVBQUEsU0FBYztRQUFLLE9BQUEsb0JBQ2xDLFFBQVEsVUFBQSxFQUNSLEtBQUssRUFBRSxLQUFLLEVBQ1osV0FBVyxFQUFFLElBQUksRUFDakIsV0FBVyxFQUFFLElBQUksRUFDakIsdUJBQXVCLEVBQUUsMkNBQW1DLElBQ3pELElBQUksRUFDUDtJQVBrQyxDQU9sQyxDQUFDLENBQUM7SUFDWCxRQUFBLGVBQWUsR0FBRyxtQkFBbUIsQ0FDOUMsV0FBVyxFQUNYLFVBQUMsUUFBYSxFQUFFLElBQVM7UUFDckIsT0FBQSxvQkFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSyxJQUFJLEVBQUU7SUFBeEUsQ0FBd0UsQ0FBQyxDQUFDO0lBWXJFLFFBQUEsZUFBZSxHQUN4QixtQkFBbUIsQ0FBWSxXQUFXLEVBQUUsVUFBQyxHQUFtQjtRQUFuQixvQkFBQSxFQUFBLFFBQW1CO1FBQUssT0FBQSxHQUFHO0lBQUgsQ0FBRyxDQUFDLENBQUM7SUFnQjlFLElBQVksaUJBS1g7SUFMRCxXQUFZLGlCQUFpQjtRQUMzQixpRUFBWSxDQUFBO1FBQ1osNEZBQTRGO1FBQzVGLHlEQUFRLENBQUE7UUFDUixtRUFBYSxDQUFBO0lBQ2YsQ0FBQyxFQUxXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSzVCO0lBRUQsSUFBWSx1QkFHWDtJQUhELFdBQVksdUJBQXVCO1FBQ2pDLHlFQUFVLENBQUE7UUFDViwyRUFBVyxDQUFBO0lBQ2IsQ0FBQyxFQUhXLHVCQUF1QixHQUF2QiwrQkFBdUIsS0FBdkIsK0JBQXVCLFFBR2xDO0lBRVksUUFBQSxlQUFlLEdBQUcsbUJBQW1CLENBQzlDLFdBQVcsRUFBRSxVQUFDLENBQWlCO1FBQWpCLGtCQUFBLEVBQUEsTUFBaUI7UUFBSyxPQUFBLG9CQUFFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPLElBQUssQ0FBQyxFQUFFO0lBQTFELENBQTBELENBQUMsQ0FBQztJQU12RixRQUFBLFVBQVUsR0FBRyxtQkFBbUIsQ0FBTyxNQUFNLEVBQUUsVUFBQyxDQUFPLElBQUssT0FBQSxvQkFBRSxJQUFJLEVBQUUsSUFBSSxJQUFLLENBQUMsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFLbEYsUUFBQSxXQUFXLEdBQ3BCLG1CQUFtQixDQUFRLE9BQU8sRUFBRSxVQUFDLG1CQUE0QixJQUFLLE9BQUEsQ0FBQyxFQUFDLG1CQUFtQixxQkFBQSxFQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBS3RGLFFBQUEsWUFBWSxHQUFHLG1CQUFtQixDQUMzQyxRQUFRLEVBQUUsVUFBQyxtQkFBNEIsSUFBSyxPQUFBLENBQUMsRUFBQyxtQkFBbUIscUJBQUEsRUFBQyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUs1RCxRQUFBLGlCQUFpQixHQUFHLG1CQUFtQixDQUNoRCxhQUFhLEVBQUUsVUFBQyxnQkFBeUIsSUFBSyxPQUFBLENBQUMsRUFBQyxnQkFBZ0Isa0JBQUEsRUFBQyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQU0zRCxRQUFBLGtCQUFrQixHQUFHLG1CQUFtQixDQUNqRCxjQUFjLEVBQUUsVUFBQyxTQUFrQixFQUFFLElBQWUsSUFBSyxPQUFBLENBQUMsRUFBQyxTQUFTLFdBQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQVlyRSxRQUFBLGNBQWMsR0FDdkIsbUJBQW1CLENBQVcsVUFBVSxFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztJQWNuRSxRQUFBLGdCQUFnQixHQUN6QixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsVUFBQyxVQUEyQjtRQUEzQiwyQkFBQSxFQUFBLGVBQTJCO1FBQUssT0FBQSxVQUFVO0lBQVYsQ0FBVSxDQUFDLENBQUM7SUFLdEUsUUFBQSxzQkFBc0IsR0FBbUI7UUFDcEQsSUFBSSxFQUFFLGlCQUFpQjtLQUN4QixDQUFDO0lBRVcsUUFBQSxnQkFBZ0IsR0FBbUI7UUFDOUMsSUFBSSxFQUFFLGtCQUFrQjtLQUN6QixDQUFDO0lBRVcsUUFBQSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsUUFBQSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsUUFBQSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsUUFBQSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFLekMsUUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBRTdCLElBQVksZUFPWDtJQVBELFdBQVksZUFBZTtRQUN6QixxREFBUSxDQUFBO1FBQ1IscURBQVEsQ0FBQTtRQUNSLHVEQUFTLENBQUE7UUFDVCx5REFBVSxDQUFBO1FBQ1YsbURBQU8sQ0FBQTtRQUNQLHFFQUFnQixDQUFBO0lBQ2xCLENBQUMsRUFQVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQU8xQjtJQWdIRCxJQUFZLDBCQUlYO0lBSkQsV0FBWSwwQkFBMEI7UUFDcEMsNkVBQVMsQ0FBQTtRQUNULGlGQUFXLENBQUE7UUFDWCwrRUFBVSxDQUFBO0lBQ1osQ0FBQyxFQUpXLDBCQUEwQixHQUExQixrQ0FBMEIsS0FBMUIsa0NBQTBCLFFBSXJDO0lBUUQsU0FBUyxtQkFBbUIsQ0FBSSxJQUFZLEVBQUUsS0FBNkI7UUFDekUsNkZBQTZGO1FBQzdGLHNFQUFzRTtRQUN0RSwrRkFBK0Y7UUFDL0YsVUFBVTtRQUNWLFNBQVMsT0FBTztZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDN0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLGdDQUFJLElBQUksR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNDLDBCQUNFLGNBQWMsRUFBRSxJQUFJLElBQ2pCLE1BQU0sRUFDVDtRQUNKLENBQUM7UUFDQSxPQUFlLENBQUMsUUFBUSxHQUFHLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFsQyxDQUFrQyxDQUFDO1FBQzVFLE9BQWUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLE9BQU8sT0FBYyxDQUFDO0lBQ3hCLENBQUM7SUE4QkQsU0FBUyw4QkFBOEIsQ0FBQyxRQUFxQjtRQUMzRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsbUNBQ3RDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMvQyxFQUFFLENBQUM7UUFDUCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekYseUJBQVEsV0FBVyxHQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUssT0FBTyxFQUFFO0lBQ3RELENBQUM7SUFFRCxTQUFTLGdDQUFnQyxDQUFDLFFBQXFCO1FBQzdELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQ0FDdEMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9DLEVBQUUsQ0FBQztRQUVQLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQjtnQkFDRSw2QkFBeUMsRUFBRSxRQUFRLENBQUMsT0FBTztlQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUssT0FBTyxFQUMxRjtTQUNIO2FBQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQyx5QkFBUSwrQkFBMkMsR0FBSyxRQUFRLENBQUMsS0FBSyxFQUFLLE9BQU8sRUFBRTtTQUNyRjthQUFNO1lBQ0wsT0FBTyxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQ3JELDJCQUF1QyxHQUFLLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkUsRUFBRSxDQUFDO1NBQ1I7SUFDSCxDQUFDO0lBRUQsU0FBUywwQkFBMEIsQ0FBQyxRQUFxQjtRQUN2RCxJQUFNLFFBQVEsR0FBRyw4QkFBOEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxJQUFNLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZGLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLEVBQTdDLENBQTZDLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLEVBQUUsQ0FBQztRQUVQLE9BQU8sUUFBUSxDQUFDLE1BQU0sT0FBZixRQUFRLG1CQUFXLFFBQVEsR0FBRTtJQUN0QyxDQUFDO0lBRUQsU0FBZ0IseUJBQXlCLENBQUMsUUFBcUI7UUFDN0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckYsQ0FBQztJQUZELDhEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIEF0dGVudGlvbjpcbi8vIFRoaXMgZmlsZSBkdXBsaWNhdGVzIHR5cGVzIGFuZCB2YWx1ZXMgZnJvbSBAYW5ndWxhci9jb3JlXG4vLyBzbyB0aGF0IHdlIGFyZSBhYmxlIHRvIG1ha2UgQGFuZ3VsYXIvY29tcGlsZXIgaW5kZXBlbmRlbnQgb2YgQGFuZ3VsYXIvY29yZS5cbi8vIFRoaXMgaXMgaW1wb3J0YW50IHRvIHByZXZlbnQgYSBidWlsZCBjeWNsZSwgYXMgQGFuZ3VsYXIvY29yZSBuZWVkcyB0b1xuLy8gYmUgY29tcGlsZWQgd2l0aCB0aGUgY29tcGlsZXIuXG5cbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gJy4vc2VsZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdCB7XG4gIHRva2VuOiBhbnk7XG59XG5leHBvcnQgY29uc3QgY3JlYXRlSW5qZWN0ID0gbWFrZU1ldGFkYXRhRmFjdG9yeTxJbmplY3Q+KCdJbmplY3QnLCAodG9rZW46IGFueSkgPT4gKHt0b2tlbn0pKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVJbmplY3Rpb25Ub2tlbiA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8b2JqZWN0PihcbiAgICAnSW5qZWN0aW9uVG9rZW4nLCAoZGVzYzogc3RyaW5nKSA9PiAoe19kZXNjOiBkZXNjLCDJtXByb3Y6IHVuZGVmaW5lZH0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUge1xuICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgY3JlYXRlQXR0cmlidXRlID1cbiAgICBtYWtlTWV0YWRhdGFGYWN0b3J5PEF0dHJpYnV0ZT4oJ0F0dHJpYnV0ZScsIChhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpID0+ICh7YXR0cmlidXRlTmFtZX0pKTtcblxuLy8gU3RvcmVzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGBlbWl0RGlzdGluY3RDaGFuZ2VzT25seWAgd2hlbiB0aGUgYGVtaXREaXN0aW5jdENoYW5nZXNPbmx5YCBpcyBub3Rcbi8vIGV4cGxpY2l0bHkgc2V0LiBUaGlzIHZhbHVlIHdpbGwgYmUgY2hhbmdlZCB0byBgdHJ1ZWAgaW4gdjEyLlxuLy8gVE9ETyhtaXNrbyk6IHN3aXRjaCB0aGUgZGVmYXVsdCBpbiB2MTIgdG8gYHRydWVgLiBTZWU6IHBhY2thZ2VzL2NvcmUvc3JjL21ldGFkYXRhL2RpLnRzXG5leHBvcnQgY29uc3QgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHlEZWZhdWx0VmFsdWUgPSBmYWxzZTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgZGVzY2VuZGFudHM6IGJvb2xlYW47XG4gIGZpcnN0OiBib29sZWFuO1xuICByZWFkOiBhbnk7XG4gIGlzVmlld1F1ZXJ5OiBib29sZWFuO1xuICBzZWxlY3RvcjogYW55O1xuICBzdGF0aWM/OiBib29sZWFuO1xuICBlbWl0RGlzdGluY3RDaGFuZ2VzT25seTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRlbnRDaGlsZHJlbiA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8UXVlcnk+KFxuICAgICdDb250ZW50Q2hpbGRyZW4nLCAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZpZXdRdWVyeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGFudHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXREaXN0aW5jdENoYW5nZXNPbmx5OiBlbWl0RGlzdGluY3RDaGFuZ2VzT25seURlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250ZW50Q2hpbGQgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PFF1ZXJ5PihcbiAgICAnQ29udGVudENoaWxkJyxcbiAgICAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PlxuICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogdHJ1ZSwgaXNWaWV3UXVlcnk6IGZhbHNlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVWaWV3Q2hpbGRyZW4gPSBtYWtlTWV0YWRhdGFGYWN0b3J5PFF1ZXJ5PihcbiAgICAnVmlld0NoaWxkcmVuJywgKHNlbGVjdG9yPzogYW55LCBkYXRhOiBhbnkgPSB7fSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgaXNWaWV3UXVlcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGFudHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk6IGVtaXREaXN0aW5jdENoYW5nZXNPbmx5RGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpZXdDaGlsZCA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8UXVlcnk+KFxuICAgICdWaWV3Q2hpbGQnLFxuICAgIChzZWxlY3RvcjogYW55LCBkYXRhOiBhbnkpID0+XG4gICAgICAgICh7c2VsZWN0b3IsIGZpcnN0OiB0cnVlLCBpc1ZpZXdRdWVyeTogdHJ1ZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlIHtcbiAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gIGlucHV0cz86IHN0cmluZ1tdO1xuICBvdXRwdXRzPzogc3RyaW5nW107XG4gIGhvc3Q/OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJvdmlkZXJzPzogUHJvdmlkZXJbXTtcbiAgZXhwb3J0QXM/OiBzdHJpbmc7XG4gIHF1ZXJpZXM/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgZ3VhcmRzPzoge1trZXk6IHN0cmluZ106IGFueX07XG59XG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0aXZlID1cbiAgICBtYWtlTWV0YWRhdGFGYWN0b3J5PERpcmVjdGl2ZT4oJ0RpcmVjdGl2ZScsIChkaXI6IERpcmVjdGl2ZSA9IHt9KSA9PiBkaXIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG4gIGNoYW5nZURldGVjdGlvbj86IENoYW5nZURldGVjdGlvblN0cmF0ZWd5O1xuICB2aWV3UHJvdmlkZXJzPzogUHJvdmlkZXJbXTtcbiAgbW9kdWxlSWQ/OiBzdHJpbmc7XG4gIHRlbXBsYXRlVXJsPzogc3RyaW5nO1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgc3R5bGVVcmxzPzogc3RyaW5nW107XG4gIHN0eWxlcz86IHN0cmluZ1tdO1xuICBhbmltYXRpb25zPzogYW55W107XG4gIGVuY2Fwc3VsYXRpb24/OiBWaWV3RW5jYXBzdWxhdGlvbjtcbiAgaW50ZXJwb2xhdGlvbj86IFtzdHJpbmcsIHN0cmluZ107XG4gIGVudHJ5Q29tcG9uZW50cz86IEFycmF5PFR5cGV8YW55W10+O1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBlbnVtIFZpZXdFbmNhcHN1bGF0aW9uIHtcbiAgRW11bGF0ZWQgPSAwLFxuICAvLyBIaXN0b3JpY2FsbHkgdGhlIDEgdmFsdWUgd2FzIGZvciBgTmF0aXZlYCBlbmNhcHN1bGF0aW9uIHdoaWNoIGhhcyBiZWVuIHJlbW92ZWQgYXMgb2YgdjExLlxuICBOb25lID0gMixcbiAgU2hhZG93RG9tID0gM1xufVxuXG5leHBvcnQgZW51bSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB7XG4gIE9uUHVzaCA9IDAsXG4gIERlZmF1bHQgPSAxXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21wb25lbnQgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PENvbXBvbmVudD4oXG4gICAgJ0NvbXBvbmVudCcsIChjOiBDb21wb25lbnQgPSB7fSkgPT4gKHtjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsIC4uLmN9KSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHVyZT86IGJvb2xlYW47XG59XG5leHBvcnQgY29uc3QgY3JlYXRlUGlwZSA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8UGlwZT4oJ1BpcGUnLCAocDogUGlwZSkgPT4gKHtwdXJlOiB0cnVlLCAuLi5wfSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0IHtcbiAgYmluZGluZ1Byb3BlcnR5TmFtZT86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnB1dCA9XG4gICAgbWFrZU1ldGFkYXRhRmFjdG9yeTxJbnB1dD4oJ0lucHV0JywgKGJpbmRpbmdQcm9wZXJ0eU5hbWU/OiBzdHJpbmcpID0+ICh7YmluZGluZ1Byb3BlcnR5TmFtZX0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBPdXRwdXQge1xuICBiaW5kaW5nUHJvcGVydHlOYW1lPzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZU91dHB1dCA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8T3V0cHV0PihcbiAgICAnT3V0cHV0JywgKGJpbmRpbmdQcm9wZXJ0eU5hbWU/OiBzdHJpbmcpID0+ICh7YmluZGluZ1Byb3BlcnR5TmFtZX0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBIb3N0QmluZGluZyB7XG4gIGhvc3RQcm9wZXJ0eU5hbWU/OiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgY3JlYXRlSG9zdEJpbmRpbmcgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PEhvc3RCaW5kaW5nPihcbiAgICAnSG9zdEJpbmRpbmcnLCAoaG9zdFByb3BlcnR5TmFtZT86IHN0cmluZykgPT4gKHtob3N0UHJvcGVydHlOYW1lfSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvc3RMaXN0ZW5lciB7XG4gIGV2ZW50TmFtZT86IHN0cmluZztcbiAgYXJncz86IHN0cmluZ1tdO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhvc3RMaXN0ZW5lciA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8SG9zdExpc3RlbmVyPihcbiAgICAnSG9zdExpc3RlbmVyJywgKGV2ZW50TmFtZT86IHN0cmluZywgYXJncz86IHN0cmluZ1tdKSA9PiAoe2V2ZW50TmFtZSwgYXJnc30pKTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZSB7XG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG4gIGRlY2xhcmF0aW9ucz86IEFycmF5PFR5cGV8YW55W10+O1xuICBpbXBvcnRzPzogQXJyYXk8VHlwZXxNb2R1bGVXaXRoUHJvdmlkZXJzfGFueVtdPjtcbiAgZXhwb3J0cz86IEFycmF5PFR5cGV8YW55W10+O1xuICBlbnRyeUNvbXBvbmVudHM/OiBBcnJheTxUeXBlfGFueVtdPjtcbiAgYm9vdHN0cmFwPzogQXJyYXk8VHlwZXxhbnlbXT47XG4gIHNjaGVtYXM/OiBBcnJheTxTY2hlbWFNZXRhZGF0YXxhbnlbXT47XG4gIGlkPzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5nTW9kdWxlID1cbiAgICBtYWtlTWV0YWRhdGFGYWN0b3J5PE5nTW9kdWxlPignTmdNb2R1bGUnLCAobmdNb2R1bGU6IE5nTW9kdWxlKSA9PiBuZ01vZHVsZSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gIG5nTW9kdWxlOiBUeXBlO1xuICBwcm92aWRlcnM/OiBQcm92aWRlcltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlIHtcbiAgcHJvdmlkZWRJbj86IFR5cGV8J3Jvb3QnfGFueTtcbiAgdXNlQ2xhc3M/OiBUeXBlfGFueTtcbiAgdXNlRXhpc3Rpbmc/OiBUeXBlfGFueTtcbiAgdXNlVmFsdWU/OiBhbnk7XG4gIHVzZUZhY3Rvcnk/OiBUeXBlfGFueTtcbiAgZGVwcz86IEFycmF5PFR5cGV8YW55W10+O1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUluamVjdGFibGUgPVxuICAgIG1ha2VNZXRhZGF0YUZhY3RvcnkoJ0luamVjdGFibGUnLCAoaW5qZWN0YWJsZTogSW5qZWN0YWJsZSA9IHt9KSA9PiBpbmplY3RhYmxlKTtcbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hTWV0YWRhdGEge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BOiBTY2hlbWFNZXRhZGF0YSA9IHtcbiAgbmFtZTogJ2N1c3RvbS1lbGVtZW50cydcbn07XG5cbmV4cG9ydCBjb25zdCBOT19FUlJPUlNfU0NIRU1BOiBTY2hlbWFNZXRhZGF0YSA9IHtcbiAgbmFtZTogJ25vLWVycm9ycy1zY2hlbWEnXG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlT3B0aW9uYWwgPSBtYWtlTWV0YWRhdGFGYWN0b3J5KCdPcHRpb25hbCcpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGYgPSBtYWtlTWV0YWRhdGFGYWN0b3J5KCdTZWxmJyk7XG5leHBvcnQgY29uc3QgY3JlYXRlU2tpcFNlbGYgPSBtYWtlTWV0YWRhdGFGYWN0b3J5KCdTa2lwU2VsZicpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhvc3QgPSBtYWtlTWV0YWRhdGFGYWN0b3J5KCdIb3N0Jyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZSBleHRlbmRzIEZ1bmN0aW9uIHtcbiAgbmV3KC4uLmFyZ3M6IGFueVtdKTogYW55O1xufVxuZXhwb3J0IGNvbnN0IFR5cGUgPSBGdW5jdGlvbjtcblxuZXhwb3J0IGVudW0gU2VjdXJpdHlDb250ZXh0IHtcbiAgTk9ORSA9IDAsXG4gIEhUTUwgPSAxLFxuICBTVFlMRSA9IDIsXG4gIFNDUklQVCA9IDMsXG4gIFVSTCA9IDQsXG4gIFJFU09VUkNFX1VSTCA9IDUsXG59XG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyID0gYW55O1xuXG5leHBvcnQgY29uc3QgZW51bSBOb2RlRmxhZ3Mge1xuICBOb25lID0gMCxcbiAgVHlwZUVsZW1lbnQgPSAxIDw8IDAsXG4gIFR5cGVUZXh0ID0gMSA8PCAxLFxuICBQcm9qZWN0ZWRUZW1wbGF0ZSA9IDEgPDwgMixcbiAgQ2F0UmVuZGVyTm9kZSA9IFR5cGVFbGVtZW50IHwgVHlwZVRleHQsXG4gIFR5cGVOZ0NvbnRlbnQgPSAxIDw8IDMsXG4gIFR5cGVQaXBlID0gMSA8PCA0LFxuICBUeXBlUHVyZUFycmF5ID0gMSA8PCA1LFxuICBUeXBlUHVyZU9iamVjdCA9IDEgPDwgNixcbiAgVHlwZVB1cmVQaXBlID0gMSA8PCA3LFxuICBDYXRQdXJlRXhwcmVzc2lvbiA9IFR5cGVQdXJlQXJyYXkgfCBUeXBlUHVyZU9iamVjdCB8IFR5cGVQdXJlUGlwZSxcbiAgVHlwZVZhbHVlUHJvdmlkZXIgPSAxIDw8IDgsXG4gIFR5cGVDbGFzc1Byb3ZpZGVyID0gMSA8PCA5LFxuICBUeXBlRmFjdG9yeVByb3ZpZGVyID0gMSA8PCAxMCxcbiAgVHlwZVVzZUV4aXN0aW5nUHJvdmlkZXIgPSAxIDw8IDExLFxuICBMYXp5UHJvdmlkZXIgPSAxIDw8IDEyLFxuICBQcml2YXRlUHJvdmlkZXIgPSAxIDw8IDEzLFxuICBUeXBlRGlyZWN0aXZlID0gMSA8PCAxNCxcbiAgQ29tcG9uZW50ID0gMSA8PCAxNSxcbiAgQ2F0UHJvdmlkZXJOb0RpcmVjdGl2ZSA9XG4gICAgICBUeXBlVmFsdWVQcm92aWRlciB8IFR5cGVDbGFzc1Byb3ZpZGVyIHwgVHlwZUZhY3RvcnlQcm92aWRlciB8IFR5cGVVc2VFeGlzdGluZ1Byb3ZpZGVyLFxuICBDYXRQcm92aWRlciA9IENhdFByb3ZpZGVyTm9EaXJlY3RpdmUgfCBUeXBlRGlyZWN0aXZlLFxuICBPbkluaXQgPSAxIDw8IDE2LFxuICBPbkRlc3Ryb3kgPSAxIDw8IDE3LFxuICBEb0NoZWNrID0gMSA8PCAxOCxcbiAgT25DaGFuZ2VzID0gMSA8PCAxOSxcbiAgQWZ0ZXJDb250ZW50SW5pdCA9IDEgPDwgMjAsXG4gIEFmdGVyQ29udGVudENoZWNrZWQgPSAxIDw8IDIxLFxuICBBZnRlclZpZXdJbml0ID0gMSA8PCAyMixcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCA9IDEgPDwgMjMsXG4gIEVtYmVkZGVkVmlld3MgPSAxIDw8IDI0LFxuICBDb21wb25lbnRWaWV3ID0gMSA8PCAyNSxcbiAgVHlwZUNvbnRlbnRRdWVyeSA9IDEgPDwgMjYsXG4gIFR5cGVWaWV3UXVlcnkgPSAxIDw8IDI3LFxuICBTdGF0aWNRdWVyeSA9IDEgPDwgMjgsXG4gIER5bmFtaWNRdWVyeSA9IDEgPDwgMjksXG4gIFR5cGVNb2R1bGVQcm92aWRlciA9IDEgPDwgMzAsXG4gIEVtaXREaXN0aW5jdENoYW5nZXNPbmx5ID0gMSA8PCAzMSxcbiAgQ2F0UXVlcnkgPSBUeXBlQ29udGVudFF1ZXJ5IHwgVHlwZVZpZXdRdWVyeSxcblxuICAvLyBtdXR1YWxseSBleGNsdXNpdmUgdmFsdWVzLi4uXG4gIFR5cGVzID0gQ2F0UmVuZGVyTm9kZSB8IFR5cGVOZ0NvbnRlbnQgfCBUeXBlUGlwZSB8IENhdFB1cmVFeHByZXNzaW9uIHwgQ2F0UHJvdmlkZXIgfCBDYXRRdWVyeVxufVxuXG5leHBvcnQgY29uc3QgZW51bSBEZXBGbGFncyB7XG4gIE5vbmUgPSAwLFxuICBTa2lwU2VsZiA9IDEgPDwgMCxcbiAgT3B0aW9uYWwgPSAxIDw8IDEsXG4gIFNlbGYgPSAxIDw8IDIsXG4gIFZhbHVlID0gMSA8PCAzLFxufVxuXG4vKipcbiAqIEluamVjdGlvbiBmbGFncyBmb3IgREkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEluamVjdEZsYWdzIHtcbiAgRGVmYXVsdCA9IDAsXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGF0IGFuIGluamVjdG9yIHNob3VsZCByZXRyaWV2ZSBhIGRlcGVuZGVuY3kgZnJvbSBhbnkgaW5qZWN0b3IgdW50aWwgcmVhY2hpbmcgdGhlXG4gICAqIGhvc3QgZWxlbWVudCBvZiB0aGUgY3VycmVudCBjb21wb25lbnQuIChPbmx5IHVzZWQgd2l0aCBFbGVtZW50IEluamVjdG9yKVxuICAgKi9cbiAgSG9zdCA9IDEgPDwgMCxcbiAgLyoqIERvbid0IGRlc2NlbmQgaW50byBhbmNlc3RvcnMgb2YgdGhlIG5vZGUgcmVxdWVzdGluZyBpbmplY3Rpb24uICovXG4gIFNlbGYgPSAxIDw8IDEsXG4gIC8qKiBTa2lwIHRoZSBub2RlIHRoYXQgaXMgcmVxdWVzdGluZyBpbmplY3Rpb24uICovXG4gIFNraXBTZWxmID0gMSA8PCAyLFxuICAvKiogSW5qZWN0IGBkZWZhdWx0VmFsdWVgIGluc3RlYWQgaWYgdG9rZW4gbm90IGZvdW5kLiAqL1xuICBPcHRpb25hbCA9IDEgPDwgMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQXJndW1lbnRUeXBlIHtcbiAgSW5saW5lID0gMCxcbiAgRHluYW1pYyA9IDFcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQmluZGluZ0ZsYWdzIHtcbiAgVHlwZUVsZW1lbnRBdHRyaWJ1dGUgPSAxIDw8IDAsXG4gIFR5cGVFbGVtZW50Q2xhc3MgPSAxIDw8IDEsXG4gIFR5cGVFbGVtZW50U3R5bGUgPSAxIDw8IDIsXG4gIFR5cGVQcm9wZXJ0eSA9IDEgPDwgMyxcbiAgU3ludGhldGljUHJvcGVydHkgPSAxIDw8IDQsXG4gIFN5bnRoZXRpY0hvc3RQcm9wZXJ0eSA9IDEgPDwgNSxcbiAgQ2F0U3ludGhldGljUHJvcGVydHkgPSBTeW50aGV0aWNQcm9wZXJ0eSB8IFN5bnRoZXRpY0hvc3RQcm9wZXJ0eSxcblxuICAvLyBtdXR1YWxseSBleGNsdXNpdmUgdmFsdWVzLi4uXG4gIFR5cGVzID0gVHlwZUVsZW1lbnRBdHRyaWJ1dGUgfCBUeXBlRWxlbWVudENsYXNzIHwgVHlwZUVsZW1lbnRTdHlsZSB8IFR5cGVQcm9wZXJ0eVxufVxuXG5leHBvcnQgY29uc3QgZW51bSBRdWVyeUJpbmRpbmdUeXBlIHtcbiAgRmlyc3QgPSAwLFxuICBBbGwgPSAxXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFF1ZXJ5VmFsdWVUeXBlIHtcbiAgRWxlbWVudFJlZiA9IDAsXG4gIFJlbmRlckVsZW1lbnQgPSAxLFxuICBUZW1wbGF0ZVJlZiA9IDIsXG4gIFZpZXdDb250YWluZXJSZWYgPSAzLFxuICBQcm92aWRlciA9IDRcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gVmlld0ZsYWdzIHtcbiAgTm9uZSA9IDAsXG4gIE9uUHVzaCA9IDEgPDwgMSxcbn1cblxuZXhwb3J0IGVudW0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kge1xuICBFcnJvciA9IDAsXG4gIFdhcm5pbmcgPSAxLFxuICBJZ25vcmUgPSAyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRmFjdG9yeTxUPiB7XG4gICguLi5hcmdzOiBhbnlbXSk6IFQ7XG4gIGlzVHlwZU9mKG9iajogYW55KTogb2JqIGlzIFQ7XG4gIG5nTWV0YWRhdGFOYW1lOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1ha2VNZXRhZGF0YUZhY3Rvcnk8VD4obmFtZTogc3RyaW5nLCBwcm9wcz86ICguLi5hcmdzOiBhbnlbXSkgPT4gVCk6IE1ldGFkYXRhRmFjdG9yeTxUPiB7XG4gIC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBhcyBhIGZ1bmN0aW9uLCBub3QgYSBmYXQgYXJyb3csIHNvIHRoYXQgRVMyMDE1IGRldm1vZGUgcHJvZHVjZXMgY29kZVxuICAvLyB0aGF0IHdvcmtzIHdpdGggdGhlIHN0YXRpY19yZWZsZWN0b3IudHMgaW4gdGhlIFZpZXdFbmdpbmUgY29tcGlsZXIuXG4gIC8vIEluIHBhcnRpY3VsYXIsIGBfcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yYCBhc3N1bWVzIHRoYXQgdGhlIHZhbHVlIHJldHVybmVkIGhlcmUgY2FuIGJlXG4gIC8vIG5ldydlZC5cbiAgZnVuY3Rpb24gZmFjdG9yeSguLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHByb3BzID8gcHJvcHMoLi4uYXJncykgOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNZXRhZGF0YU5hbWU6IG5hbWUsXG4gICAgICAuLi52YWx1ZXMsXG4gICAgfTtcbiAgfVxuICAoZmFjdG9yeSBhcyBhbnkpLmlzVHlwZU9mID0gKG9iajogYW55KSA9PiBvYmogJiYgb2JqLm5nTWV0YWRhdGFOYW1lID09PSBuYW1lO1xuICAoZmFjdG9yeSBhcyBhbnkpLm5nTWV0YWRhdGFOYW1lID0gbmFtZTtcbiAgcmV0dXJuIGZhY3RvcnkgYXMgYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlIHtcbiAgY2hpbGRyZW4/OiBSb3V0ZVtdO1xuICBsb2FkQ2hpbGRyZW4/OiBzdHJpbmd8VHlwZXxhbnk7XG59XG5cbi8qKlxuICogRmxhZ3MgdXNlZCB0byBnZW5lcmF0ZSBSMy1zdHlsZSBDU1MgU2VsZWN0b3JzLiBUaGV5IGFyZSBwYXN0ZWQgZnJvbVxuICogY29yZS9zcmMvcmVuZGVyMy9wcm9qZWN0aW9uLnRzIGJlY2F1c2UgdGhleSBjYW5ub3QgYmUgcmVmZXJlbmNlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gU2VsZWN0b3JGbGFncyB7XG4gIC8qKiBJbmRpY2F0ZXMgdGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIGEgbmV3IG5lZ2F0aXZlIHNlbGVjdG9yICovXG4gIE5PVCA9IDBiMDAwMSxcblxuICAvKiogTW9kZSBmb3IgbWF0Y2hpbmcgYXR0cmlidXRlcyAqL1xuICBBVFRSSUJVVEUgPSAwYjAwMTAsXG5cbiAgLyoqIE1vZGUgZm9yIG1hdGNoaW5nIHRhZyBuYW1lcyAqL1xuICBFTEVNRU5UID0gMGIwMTAwLFxuXG4gIC8qKiBNb2RlIGZvciBtYXRjaGluZyBjbGFzcyBuYW1lcyAqL1xuICBDTEFTUyA9IDBiMTAwMCxcbn1cblxuLy8gVGhlc2UgYXJlIGEgY29weSB0aGUgQ1NTIHR5cGVzIGZyb20gY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL3Byb2plY3Rpb24udHNcbi8vIFRoZXkgYXJlIGR1cGxpY2F0ZWQgaGVyZSBhcyB0aGV5IGNhbm5vdCBiZSBkaXJlY3RseSByZWZlcmVuY2VkIGZyb20gY29yZS5cbmV4cG9ydCB0eXBlIFIzQ3NzU2VsZWN0b3IgPSAoc3RyaW5nfFNlbGVjdG9yRmxhZ3MpW107XG5leHBvcnQgdHlwZSBSM0Nzc1NlbGVjdG9yTGlzdCA9IFIzQ3NzU2VsZWN0b3JbXTtcblxuZnVuY3Rpb24gcGFyc2VyU2VsZWN0b3JUb1NpbXBsZVNlbGVjdG9yKHNlbGVjdG9yOiBDc3NTZWxlY3Rvcik6IFIzQ3NzU2VsZWN0b3Ige1xuICBjb25zdCBjbGFzc2VzID0gc2VsZWN0b3IuY2xhc3NOYW1lcyAmJiBzZWxlY3Rvci5jbGFzc05hbWVzLmxlbmd0aCA/XG4gICAgICBbU2VsZWN0b3JGbGFncy5DTEFTUywgLi4uc2VsZWN0b3IuY2xhc3NOYW1lc10gOlxuICAgICAgW107XG4gIGNvbnN0IGVsZW1lbnROYW1lID0gc2VsZWN0b3IuZWxlbWVudCAmJiBzZWxlY3Rvci5lbGVtZW50ICE9PSAnKicgPyBzZWxlY3Rvci5lbGVtZW50IDogJyc7XG4gIHJldHVybiBbZWxlbWVudE5hbWUsIC4uLnNlbGVjdG9yLmF0dHJzLCAuLi5jbGFzc2VzXTtcbn1cblxuZnVuY3Rpb24gcGFyc2VyU2VsZWN0b3JUb05lZ2F0aXZlU2VsZWN0b3Ioc2VsZWN0b3I6IENzc1NlbGVjdG9yKTogUjNDc3NTZWxlY3RvciB7XG4gIGNvbnN0IGNsYXNzZXMgPSBzZWxlY3Rvci5jbGFzc05hbWVzICYmIHNlbGVjdG9yLmNsYXNzTmFtZXMubGVuZ3RoID9cbiAgICAgIFtTZWxlY3RvckZsYWdzLkNMQVNTLCAuLi5zZWxlY3Rvci5jbGFzc05hbWVzXSA6XG4gICAgICBbXTtcblxuICBpZiAoc2VsZWN0b3IuZWxlbWVudCkge1xuICAgIHJldHVybiBbXG4gICAgICBTZWxlY3RvckZsYWdzLk5PVCB8IFNlbGVjdG9yRmxhZ3MuRUxFTUVOVCwgc2VsZWN0b3IuZWxlbWVudCwgLi4uc2VsZWN0b3IuYXR0cnMsIC4uLmNsYXNzZXNcbiAgICBdO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yLmF0dHJzLmxlbmd0aCkge1xuICAgIHJldHVybiBbU2VsZWN0b3JGbGFncy5OT1QgfCBTZWxlY3RvckZsYWdzLkFUVFJJQlVURSwgLi4uc2VsZWN0b3IuYXR0cnMsIC4uLmNsYXNzZXNdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzZWxlY3Rvci5jbGFzc05hbWVzICYmIHNlbGVjdG9yLmNsYXNzTmFtZXMubGVuZ3RoID9cbiAgICAgICAgW1NlbGVjdG9yRmxhZ3MuTk9UIHwgU2VsZWN0b3JGbGFncy5DTEFTUywgLi4uc2VsZWN0b3IuY2xhc3NOYW1lc10gOlxuICAgICAgICBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZXJTZWxlY3RvclRvUjNTZWxlY3RvcihzZWxlY3RvcjogQ3NzU2VsZWN0b3IpOiBSM0Nzc1NlbGVjdG9yIHtcbiAgY29uc3QgcG9zaXRpdmUgPSBwYXJzZXJTZWxlY3RvclRvU2ltcGxlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gIGNvbnN0IG5lZ2F0aXZlOiBSM0Nzc1NlbGVjdG9yTGlzdCA9IHNlbGVjdG9yLm5vdFNlbGVjdG9ycyAmJiBzZWxlY3Rvci5ub3RTZWxlY3RvcnMubGVuZ3RoID9cbiAgICAgIHNlbGVjdG9yLm5vdFNlbGVjdG9ycy5tYXAobm90U2VsZWN0b3IgPT4gcGFyc2VyU2VsZWN0b3JUb05lZ2F0aXZlU2VsZWN0b3Iobm90U2VsZWN0b3IpKSA6XG4gICAgICBbXTtcblxuICByZXR1cm4gcG9zaXRpdmUuY29uY2F0KC4uLm5lZ2F0aXZlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2VsZWN0b3JUb1IzU2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZ3xudWxsKTogUjNDc3NTZWxlY3Rvckxpc3Qge1xuICByZXR1cm4gc2VsZWN0b3IgPyBDc3NTZWxlY3Rvci5wYXJzZShzZWxlY3RvcikubWFwKHBhcnNlclNlbGVjdG9yVG9SM1NlbGVjdG9yKSA6IFtdO1xufVxuXG4vLyBQYXN0ZWQgZnJvbSByZW5kZXIzL2ludGVyZmFjZXMvZGVmaW5pdGlvbiBzaW5jZSBpdCBjYW5ub3QgYmUgcmVmZXJlbmNlZCBkaXJlY3RseVxuLyoqXG4gKiBGbGFncyBwYXNzZWQgaW50byB0ZW1wbGF0ZSBmdW5jdGlvbnMgdG8gZGV0ZXJtaW5lIHdoaWNoIGJsb2NrcyAoaS5lLiBjcmVhdGlvbiwgdXBkYXRlKVxuICogc2hvdWxkIGJlIGV4ZWN1dGVkLlxuICpcbiAqIFR5cGljYWxseSwgYSB0ZW1wbGF0ZSBydW5zIGJvdGggdGhlIGNyZWF0aW9uIGJsb2NrIGFuZCB0aGUgdXBkYXRlIGJsb2NrIG9uIGluaXRpYWxpemF0aW9uIGFuZFxuICogc3Vic2VxdWVudCBydW5zIG9ubHkgZXhlY3V0ZSB0aGUgdXBkYXRlIGJsb2NrLiBIb3dldmVyLCBkeW5hbWljYWxseSBjcmVhdGVkIHZpZXdzIHJlcXVpcmUgdGhhdFxuICogdGhlIGNyZWF0aW9uIGJsb2NrIGJlIGV4ZWN1dGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgdXBkYXRlIGJsb2NrIChmb3IgYmFja3dhcmRzIGNvbXBhdCkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFJlbmRlckZsYWdzIHtcbiAgLyogV2hldGhlciB0byBydW4gdGhlIGNyZWF0aW9uIGJsb2NrIChlLmcuIGNyZWF0ZSBlbGVtZW50cyBhbmQgZGlyZWN0aXZlcykgKi9cbiAgQ3JlYXRlID0gMGIwMSxcblxuICAvKiBXaGV0aGVyIHRvIHJ1biB0aGUgdXBkYXRlIGJsb2NrIChlLmcuIHJlZnJlc2ggYmluZGluZ3MpICovXG4gIFVwZGF0ZSA9IDBiMTBcbn1cblxuLy8gUGFzdGVkIGZyb20gcmVuZGVyMy9pbnRlcmZhY2VzL25vZGUudHNcbi8qKlxuICogQSBzZXQgb2YgbWFya2VyIHZhbHVlcyB0byBiZSB1c2VkIGluIHRoZSBhdHRyaWJ1dGVzIGFycmF5cy4gVGhlc2UgbWFya2VycyBpbmRpY2F0ZSB0aGF0IHNvbWVcbiAqIGl0ZW1zIGFyZSBub3QgcmVndWxhciBhdHRyaWJ1dGVzIGFuZCB0aGUgcHJvY2Vzc2luZyBzaG91bGQgYmUgYWRhcHRlZCBhY2NvcmRpbmdseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gQXR0cmlidXRlTWFya2VyIHtcbiAgLyoqXG4gICAqIE1hcmtlciBpbmRpY2F0ZXMgdGhhdCB0aGUgZm9sbG93aW5nIDMgdmFsdWVzIGluIHRoZSBhdHRyaWJ1dGVzIGFycmF5IGFyZTpcbiAgICogbmFtZXNwYWNlVXJpLCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZVxuICAgKiBpbiB0aGF0IG9yZGVyLlxuICAgKi9cbiAgTmFtZXNwYWNlVVJJID0gMCxcblxuICAvKipcbiAgICogU2lnbmFscyBjbGFzcyBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogRWFjaCB2YWx1ZSBmb2xsb3dpbmcgYENsYXNzZXNgIGRlc2lnbmF0ZXMgYSBjbGFzcyBuYW1lIHRvIGluY2x1ZGUgb24gdGhlIGVsZW1lbnQuXG4gICAqICMjIEV4YW1wbGU6XG4gICAqXG4gICAqIEdpdmVuOlxuICAgKiBgYGBcbiAgICogPGRpdiBjbGFzcz1cImZvbyBiYXIgYmF6XCI+Li4uPGQvdmk+XG4gICAqIGBgYFxuICAgKlxuICAgKiB0aGUgZ2VuZXJhdGVkIGNvZGUgaXM6XG4gICAqIGBgYFxuICAgKiB2YXIgX2MxID0gW0F0dHJpYnV0ZU1hcmtlci5DbGFzc2VzLCAnZm9vJywgJ2JhcicsICdiYXonXTtcbiAgICogYGBgXG4gICAqL1xuICBDbGFzc2VzID0gMSxcblxuICAvKipcbiAgICogU2lnbmFscyBzdHlsZSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogRWFjaCBwYWlyIG9mIHZhbHVlcyBmb2xsb3dpbmcgYFN0eWxlc2AgZGVzaWduYXRlcyBhIHN0eWxlIG5hbWUgYW5kIHZhbHVlIHRvIGluY2x1ZGUgb24gdGhlXG4gICAqIGVsZW1lbnQuXG4gICAqICMjIEV4YW1wbGU6XG4gICAqXG4gICAqIEdpdmVuOlxuICAgKiBgYGBcbiAgICogPGRpdiBzdHlsZT1cIndpZHRoOjEwMHB4OyBoZWlnaHQ6MjAwcHg7IGNvbG9yOnJlZFwiPi4uLjwvZGl2PlxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGdlbmVyYXRlZCBjb2RlIGlzOlxuICAgKiBgYGBcbiAgICogdmFyIF9jMSA9IFtBdHRyaWJ1dGVNYXJrZXIuU3R5bGVzLCAnd2lkdGgnLCAnMTAwcHgnLCAnaGVpZ2h0Jy4gJzIwMHB4JywgJ2NvbG9yJywgJ3JlZCddO1xuICAgKiBgYGBcbiAgICovXG4gIFN0eWxlcyA9IDIsXG5cbiAgLyoqXG4gICAqIFNpZ25hbHMgdGhhdCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSBuYW1lcyB3ZXJlIGV4dHJhY3RlZCBmcm9tIGlucHV0IG9yIG91dHB1dCBiaW5kaW5ncy5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgSFRNTDpcbiAgICpcbiAgICogYGBgXG4gICAqIDxkaXYgbW9vPVwiY2FyXCIgW2Zvb109XCJleHBcIiAoYmFyKT1cImRvU3RoKClcIj5cbiAgICogYGBgXG4gICAqXG4gICAqIHRoZSBnZW5lcmF0ZWQgY29kZSBpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHZhciBfYzEgPSBbJ21vbycsICdjYXInLCBBdHRyaWJ1dGVNYXJrZXIuQmluZGluZ3MsICdmb28nLCAnYmFyJ107XG4gICAqIGBgYFxuICAgKi9cbiAgQmluZGluZ3MgPSAzLFxuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRoYXQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgbmFtZXMgd2VyZSBob2lzdGVkIGZyb20gYW4gaW5saW5lLXRlbXBsYXRlIGRlY2xhcmF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBIVE1MOlxuICAgKlxuICAgKiBgYGBcbiAgICogPGRpdiAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdmFsdWVzOyB0cmFja0J5OnRyYWNrQnlcIiBkaXJBIFtkaXJCXT1cInZhbHVlXCI+XG4gICAqIGBgYFxuICAgKlxuICAgKiB0aGUgZ2VuZXJhdGVkIGNvZGUgZm9yIHRoZSBgdGVtcGxhdGUoKWAgaW5zdHJ1Y3Rpb24gd291bGQgaW5jbHVkZTpcbiAgICpcbiAgICogYGBgXG4gICAqIFsnZGlyQScsICcnLCBBdHRyaWJ1dGVNYXJrZXIuQmluZGluZ3MsICdkaXJCJywgQXR0cmlidXRlTWFya2VyLlRlbXBsYXRlLCAnbmdGb3InLCAnbmdGb3JPZicsXG4gICAqICduZ0ZvclRyYWNrQnknLCAnbGV0LXZhbHVlJ11cbiAgICogYGBgXG4gICAqXG4gICAqIHdoaWxlIHRoZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGBlbGVtZW50KClgIGluc3RydWN0aW9uIGluc2lkZSB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gd291bGRcbiAgICogaW5jbHVkZTpcbiAgICpcbiAgICogYGBgXG4gICAqIFsnZGlyQScsICcnLCBBdHRyaWJ1dGVNYXJrZXIuQmluZGluZ3MsICdkaXJCJ11cbiAgICogYGBgXG4gICAqL1xuICBUZW1wbGF0ZSA9IDQsXG5cbiAgLyoqXG4gICAqIFNpZ25hbHMgdGhhdCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSBpcyBgbmdQcm9qZWN0QXNgIGFuZCBpdHMgdmFsdWUgaXMgYSBwYXJzZWQgYENzc1NlbGVjdG9yYC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgSFRNTDpcbiAgICpcbiAgICogYGBgXG4gICAqIDxoMSBhdHRyPVwidmFsdWVcIiBuZ1Byb2plY3RBcz1cIlt0aXRsZV1cIj5cbiAgICogYGBgXG4gICAqXG4gICAqIHRoZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGBlbGVtZW50KClgIGluc3RydWN0aW9uIHdvdWxkIGluY2x1ZGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBbJ2F0dHInLCAndmFsdWUnLCBBdHRyaWJ1dGVNYXJrZXIuUHJvamVjdEFzLCBbJycsICd0aXRsZScsICcnXV1cbiAgICogYGBgXG4gICAqL1xuICBQcm9qZWN0QXMgPSA1LFxuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRoYXQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgd2lsbCBiZSB0cmFuc2xhdGVkIGJ5IHJ1bnRpbWUgaTE4blxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBIVE1MOlxuICAgKlxuICAgKiBgYGBcbiAgICogPGRpdiBtb289XCJjYXJcIiBmb289XCJ2YWx1ZVwiIGkxOG4tZm9vIFtiYXJdPVwiYmluZGluZ1wiIGkxOG4tYmFyPlxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGdlbmVyYXRlZCBjb2RlIGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdmFyIF9jMSA9IFsnbW9vJywgJ2NhcicsIEF0dHJpYnV0ZU1hcmtlci5JMThuLCAnZm9vJywgJ2JhciddO1xuICAgKi9cbiAgSTE4biA9IDYsXG59XG4iXX0=