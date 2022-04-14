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
        define("@angular/language-service/src/html_info", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.propertyNames = exports.eventNames = exports.SchemaInformation = exports.attributeType = exports.attributeNames = exports.elementNames = void 0;
    var tslib_1 = require("tslib");
    var values = [
        'ID',
        'CDATA',
        'NAME',
        ['ltr', 'rtl'],
        ['rect', 'circle', 'poly', 'default'],
        'NUMBER',
        ['nohref'],
        ['ismap'],
        ['declare'],
        ['DATA', 'REF', 'OBJECT'],
        ['GET', 'POST'],
        'IDREF',
        ['TEXT', 'PASSWORD', 'CHECKBOX', 'RADIO', 'SUBMIT', 'RESET', 'FILE', 'HIDDEN', 'IMAGE', 'BUTTON'],
        ['checked'],
        ['disabled'],
        ['readonly'],
        ['multiple'],
        ['selected'],
        ['button', 'submit', 'reset'],
        ['void', 'above', 'below', 'hsides', 'lhs', 'rhs', 'vsides', 'box', 'border'],
        ['none', 'groups', 'rows', 'cols', 'all'],
        ['left', 'center', 'right', 'justify', 'char'],
        ['top', 'middle', 'bottom', 'baseline'],
        'IDREFS',
        ['row', 'col', 'rowgroup', 'colgroup'],
        ['defer']
    ];
    var groups = [
        { id: 0 },
        {
            onclick: 1,
            ondblclick: 1,
            onmousedown: 1,
            onmouseup: 1,
            onmouseover: 1,
            onmousemove: 1,
            onmouseout: 1,
            onkeypress: 1,
            onkeydown: 1,
            onkeyup: 1
        },
        { lang: 2, dir: 3 },
        { onload: 1, onunload: 1 },
        { name: 1 },
        { href: 1 },
        { type: 1 },
        { alt: 1 },
        { tabindex: 5 },
        { media: 1 },
        { nohref: 6 },
        { usemap: 1 },
        { src: 1 },
        { onfocus: 1, onblur: 1 },
        { charset: 1 },
        { declare: 8, classid: 1, codebase: 1, data: 1, codetype: 1, archive: 1, standby: 1 },
        { title: 1 },
        { value: 1 },
        { cite: 1 },
        { datetime: 1 },
        { accept: 1 },
        { shape: 4, coords: 1 },
        { for: 11
        },
        { action: 1, method: 10, enctype: 1, onsubmit: 1, onreset: 1, 'accept-charset': 1 },
        { valuetype: 9 },
        { longdesc: 1 },
        { width: 1 },
        { disabled: 14 },
        { readonly: 15, onselect: 1 },
        { accesskey: 1 },
        { size: 5, multiple: 16 },
        { onchange: 1 },
        { label: 1 },
        { selected: 17 },
        { type: 12, checked: 13, size: 1, maxlength: 5 },
        { rows: 5, cols: 5 },
        { type: 18 },
        { height: 1 },
        { summary: 1, border: 1, frame: 19, rules: 20, cellspacing: 1, cellpadding: 1, datapagesize: 1 },
        { align: 21, char: 1, charoff: 1, valign: 22 },
        { span: 5 },
        { abbr: 1, axis: 1, headers: 23, scope: 24, rowspan: 5, colspan: 5 },
        { profile: 1 },
        { 'http-equiv': 2, name: 2, content: 1, scheme: 1 },
        { class: 1, style: 1 },
        { hreflang: 2, rel: 1, rev: 1 },
        { ismap: 7 },
        {
            defer: 25, event: 1, for: 1
        }
    ];
    var elements = {
        TT: [0, 1, 2, 16, 44],
        I: [0, 1, 2, 16, 44],
        B: [0, 1, 2, 16, 44],
        BIG: [0, 1, 2, 16, 44],
        SMALL: [0, 1, 2, 16, 44],
        EM: [0, 1, 2, 16, 44],
        STRONG: [0, 1, 2, 16, 44],
        DFN: [0, 1, 2, 16, 44],
        CODE: [0, 1, 2, 16, 44],
        SAMP: [0, 1, 2, 16, 44],
        KBD: [0, 1, 2, 16, 44],
        VAR: [0, 1, 2, 16, 44],
        CITE: [0, 1, 2, 16, 44],
        ABBR: [0, 1, 2, 16, 44],
        ACRONYM: [0, 1, 2, 16, 44],
        SUB: [0, 1, 2, 16, 44],
        SUP: [0, 1, 2, 16, 44],
        SPAN: [0, 1, 2, 16, 44],
        BDO: [0, 2, 16, 44],
        BR: [0, 16, 44],
        BODY: [0, 1, 2, 3, 16, 44],
        ADDRESS: [0, 1, 2, 16, 44],
        DIV: [0, 1, 2, 16, 44],
        A: [0, 1, 2, 4, 5, 6, 8, 13, 14, 16, 21, 29, 44, 45],
        MAP: [0, 1, 2, 4, 16, 44],
        AREA: [0, 1, 2, 5, 7, 8, 10, 13, 16, 21, 29, 44],
        LINK: [0, 1, 2, 5, 6, 9, 14, 16, 44, 45],
        IMG: [0, 1, 2, 4, 7, 11, 12, 16, 25, 26, 37, 44, 46],
        OBJECT: [0, 1, 2, 4, 6, 8, 11, 15, 16, 26, 37, 44],
        PARAM: [0, 4, 6, 17, 24],
        HR: [0, 1, 2, 16, 44],
        P: [0, 1, 2, 16, 44],
        H1: [0, 1, 2, 16, 44],
        H2: [0, 1, 2, 16, 44],
        H3: [0, 1, 2, 16, 44],
        H4: [0, 1, 2, 16, 44],
        H5: [0, 1, 2, 16, 44],
        H6: [0, 1, 2, 16, 44],
        PRE: [0, 1, 2, 16, 44],
        Q: [0, 1, 2, 16, 18, 44],
        BLOCKQUOTE: [0, 1, 2, 16, 18, 44],
        INS: [0, 1, 2, 16, 18, 19, 44],
        DEL: [0, 1, 2, 16, 18, 19, 44],
        DL: [0, 1, 2, 16, 44],
        DT: [0, 1, 2, 16, 44],
        DD: [0, 1, 2, 16, 44],
        OL: [0, 1, 2, 16, 44],
        UL: [0, 1, 2, 16, 44],
        LI: [0, 1, 2, 16, 44],
        FORM: [0, 1, 2, 4, 16, 20, 23, 44],
        LABEL: [0, 1, 2, 13, 16, 22, 29, 44],
        INPUT: [0, 1, 2, 4, 7, 8, 11, 12, 13, 16, 17, 20, 27, 28, 29, 31, 34, 44, 46],
        SELECT: [0, 1, 2, 4, 8, 13, 16, 27, 30, 31, 44],
        OPTGROUP: [0, 1, 2, 16, 27, 32, 44],
        OPTION: [0, 1, 2, 16, 17, 27, 32, 33, 44],
        TEXTAREA: [0, 1, 2, 4, 8, 13, 16, 27, 28, 29, 31, 35, 44],
        FIELDSET: [0, 1, 2, 16, 44],
        LEGEND: [0, 1, 2, 16, 29, 44],
        BUTTON: [0, 1, 2, 4, 8, 13, 16, 17, 27, 29, 36, 44],
        TABLE: [0, 1, 2, 16, 26, 38, 44],
        CAPTION: [0, 1, 2, 16, 44],
        COLGROUP: [0, 1, 2, 16, 26, 39, 40, 44],
        COL: [0, 1, 2, 16, 26, 39, 40, 44],
        THEAD: [0, 1, 2, 16, 39, 44],
        TBODY: [0, 1, 2, 16, 39, 44],
        TFOOT: [0, 1, 2, 16, 39, 44],
        TR: [0, 1, 2, 16, 39, 44],
        TH: [0, 1, 2, 16, 39, 41, 44],
        TD: [0, 1, 2, 16, 39, 41, 44],
        HEAD: [2, 42],
        TITLE: [2],
        BASE: [5],
        META: [2, 43],
        STYLE: [2, 6, 9, 16],
        SCRIPT: [6, 12, 14, 47],
        NOSCRIPT: [0, 1, 2, 16, 44],
        HTML: [2]
    };
    var defaultAttributes = [0, 1, 2, 4];
    function elementNames() {
        return Object.keys(elements).sort().map(function (v) { return v.toLowerCase(); });
    }
    exports.elementNames = elementNames;
    function compose(indexes) {
        var e_1, _a;
        var result = {};
        if (indexes) {
            try {
                for (var indexes_1 = tslib_1.__values(indexes), indexes_1_1 = indexes_1.next(); !indexes_1_1.done; indexes_1_1 = indexes_1.next()) {
                    var index = indexes_1_1.value;
                    var group = groups[index];
                    for (var name_1 in group)
                        if (group.hasOwnProperty(name_1))
                            result[name_1] = values[group[name_1]];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (indexes_1_1 && !indexes_1_1.done && (_a = indexes_1.return)) _a.call(indexes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return result;
    }
    function attributeNames(element) {
        return Object.keys(compose(elements[element.toUpperCase()] || defaultAttributes)).sort();
    }
    exports.attributeNames = attributeNames;
    function attributeType(element, attribute) {
        return compose(elements[element.toUpperCase()] || defaultAttributes)[attribute.toLowerCase()];
    }
    exports.attributeType = attributeType;
    // This section is describes the DOM property surface of a DOM element and is derivgulp formated
    // from
    // from the SCHEMA strings from the security context information. SCHEMA is copied here because
    // it would be an unnecessary risk to allow this array to be imported from the security context
    // schema registry.
    var SCHEMA = [
        '[Element]|textContent,%classList,className,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*copy,*cut,*paste,*search,*selectstart,*webkitfullscreenchange,*webkitfullscreenerror,*wheel,outerHTML,#scrollLeft,#scrollTop,slot' +
            /* added manually to avoid breaking changes */
            ',*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored',
        '[HTMLElement]^[Element]|accessKey,contentEditable,dir,!draggable,!hidden,innerText,lang,*abort,*auxclick,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,outerText,!spellcheck,%style,#tabIndex,title,!translate',
        'abbr,address,article,aside,b,bdi,bdo,cite,code,dd,dfn,dt,em,figcaption,figure,footer,header,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,contentEditable,dir,!draggable,!hidden,innerText,lang,*abort,*auxclick,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,outerText,!spellcheck,%style,#tabIndex,title,!translate',
        'media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,src,%srcObject,#volume',
        ':svg:^[HTMLElement]|*abort,*auxclick,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*cuechange,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,%style,#tabIndex',
        ':svg:graphics^:svg:|',
        ':svg:animation^:svg:|*begin,*end,*repeat',
        ':svg:geometry^:svg:|',
        ':svg:componentTransferFunction^:svg:|',
        ':svg:gradient^:svg:|',
        ':svg:textContent^:svg:graphics|',
        ':svg:textPositioning^:svg:textContent|',
        'a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,rev,search,shape,target,text,type,username',
        'area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,search,shape,target,username',
        'audio^media|',
        'br^[HTMLElement]|clear',
        'base^[HTMLElement]|href,target',
        'body^[HTMLElement]|aLink,background,bgColor,link,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink',
        'button^[HTMLElement]|!autofocus,!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value',
        'canvas^[HTMLElement]|#height,#width',
        'content^[HTMLElement]|select',
        'dl^[HTMLElement]|!compact',
        'datalist^[HTMLElement]|',
        'details^[HTMLElement]|!open',
        'dialog^[HTMLElement]|!open,returnValue',
        'dir^[HTMLElement]|!compact',
        'div^[HTMLElement]|align',
        'embed^[HTMLElement]|align,height,name,src,type,width',
        'fieldset^[HTMLElement]|!disabled,name',
        'font^[HTMLElement]|color,face,size',
        'form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target',
        'frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src',
        'frameset^[HTMLElement]|cols,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows',
        'hr^[HTMLElement]|align,color,!noShade,size,width',
        'head^[HTMLElement]|',
        'h1,h2,h3,h4,h5,h6^[HTMLElement]|align',
        'html^[HTMLElement]|version',
        'iframe^[HTMLElement]|align,!allowFullscreen,frameBorder,height,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width',
        'img^[HTMLElement]|align,alt,border,%crossOrigin,#height,#hspace,!isMap,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width',
        'input^[HTMLElement]|accept,align,alt,autocapitalize,autocomplete,!autofocus,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width',
        'li^[HTMLElement]|type,#value',
        'label^[HTMLElement]|htmlFor',
        'legend^[HTMLElement]|align',
        'link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type',
        'map^[HTMLElement]|name',
        'marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width',
        'menu^[HTMLElement]|!compact',
        'meta^[HTMLElement]|content,httpEquiv,name,scheme',
        'meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value',
        'ins,del^[HTMLElement]|cite,dateTime',
        'ol^[HTMLElement]|!compact,!reversed,#start,type',
        'object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width',
        'optgroup^[HTMLElement]|!disabled,label',
        'option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value',
        'output^[HTMLElement]|defaultValue,%htmlFor,name,value',
        'p^[HTMLElement]|align',
        'param^[HTMLElement]|name,type,value,valueType',
        'picture^[HTMLElement]|',
        'pre^[HTMLElement]|#width',
        'progress^[HTMLElement]|#max,#value',
        'q,blockquote,cite^[HTMLElement]|',
        'script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,src,text,type',
        'select^[HTMLElement]|!autofocus,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value',
        'shadow^[HTMLElement]|',
        'slot^[HTMLElement]|name',
        'source^[HTMLElement]|media,sizes,src,srcset,type',
        'span^[HTMLElement]|',
        'style^[HTMLElement]|!disabled,media,type',
        'caption^[HTMLElement]|align',
        'th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width',
        'col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width',
        'table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width',
        'tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign',
        'tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign',
        'template^[HTMLElement]|',
        'textarea^[HTMLElement]|autocapitalize,!autofocus,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap',
        'title^[HTMLElement]|text',
        'track^[HTMLElement]|!default,kind,label,src,srclang',
        'ul^[HTMLElement]|!compact,type',
        'unknown^[HTMLElement]|',
        'video^media|#height,poster,#width',
        ':svg:a^:svg:graphics|',
        ':svg:animate^:svg:animation|',
        ':svg:animateMotion^:svg:animation|',
        ':svg:animateTransform^:svg:animation|',
        ':svg:circle^:svg:geometry|',
        ':svg:clipPath^:svg:graphics|',
        ':svg:defs^:svg:graphics|',
        ':svg:desc^:svg:|',
        ':svg:discard^:svg:|',
        ':svg:ellipse^:svg:geometry|',
        ':svg:feBlend^:svg:|',
        ':svg:feColorMatrix^:svg:|',
        ':svg:feComponentTransfer^:svg:|',
        ':svg:feComposite^:svg:|',
        ':svg:feConvolveMatrix^:svg:|',
        ':svg:feDiffuseLighting^:svg:|',
        ':svg:feDisplacementMap^:svg:|',
        ':svg:feDistantLight^:svg:|',
        ':svg:feDropShadow^:svg:|',
        ':svg:feFlood^:svg:|',
        ':svg:feFuncA^:svg:componentTransferFunction|',
        ':svg:feFuncB^:svg:componentTransferFunction|',
        ':svg:feFuncG^:svg:componentTransferFunction|',
        ':svg:feFuncR^:svg:componentTransferFunction|',
        ':svg:feGaussianBlur^:svg:|',
        ':svg:feImage^:svg:|',
        ':svg:feMerge^:svg:|',
        ':svg:feMergeNode^:svg:|',
        ':svg:feMorphology^:svg:|',
        ':svg:feOffset^:svg:|',
        ':svg:fePointLight^:svg:|',
        ':svg:feSpecularLighting^:svg:|',
        ':svg:feSpotLight^:svg:|',
        ':svg:feTile^:svg:|',
        ':svg:feTurbulence^:svg:|',
        ':svg:filter^:svg:|',
        ':svg:foreignObject^:svg:graphics|',
        ':svg:g^:svg:graphics|',
        ':svg:image^:svg:graphics|',
        ':svg:line^:svg:geometry|',
        ':svg:linearGradient^:svg:gradient|',
        ':svg:mpath^:svg:|',
        ':svg:marker^:svg:|',
        ':svg:mask^:svg:|',
        ':svg:metadata^:svg:|',
        ':svg:path^:svg:geometry|',
        ':svg:pattern^:svg:|',
        ':svg:polygon^:svg:geometry|',
        ':svg:polyline^:svg:geometry|',
        ':svg:radialGradient^:svg:gradient|',
        ':svg:rect^:svg:geometry|',
        ':svg:svg^:svg:graphics|#currentScale,#zoomAndPan',
        ':svg:script^:svg:|type',
        ':svg:set^:svg:animation|',
        ':svg:stop^:svg:|',
        ':svg:style^:svg:|!disabled,media,title,type',
        ':svg:switch^:svg:graphics|',
        ':svg:symbol^:svg:|',
        ':svg:tspan^:svg:textPositioning|',
        ':svg:text^:svg:textPositioning|',
        ':svg:textPath^:svg:textContent|',
        ':svg:title^:svg:|',
        ':svg:use^:svg:graphics|',
        ':svg:view^:svg:|#zoomAndPan',
        'data^[HTMLElement]|value',
        'keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name',
        'menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default',
        'summary^[HTMLElement]|',
        'time^[HTMLElement]|dateTime',
        ':svg:cursor^:svg:|',
    ];
    var EVENT = 'event';
    var BOOLEAN = 'boolean';
    var NUMBER = 'number';
    var STRING = 'string';
    var OBJECT = 'object';
    var SchemaInformation = /** @class */ (function () {
        function SchemaInformation() {
            var _this = this;
            this.schema = {};
            SCHEMA.forEach(function (encodedType) {
                var parts = encodedType.split('|');
                var properties = parts[1].split(',');
                var typeParts = (parts[0] + '^').split('^');
                var typeName = typeParts[0];
                var type = {};
                typeName.split(',').forEach(function (tag) { return _this.schema[tag.toLowerCase()] = type; });
                var superName = typeParts[1];
                var superType = superName && _this.schema[superName.toLowerCase()];
                if (superType) {
                    for (var key in superType) {
                        type[key] = superType[key];
                    }
                }
                properties.forEach(function (property) {
                    if (property === '') {
                    }
                    else if (property.startsWith('*')) {
                        type[property.substring(1)] = EVENT;
                    }
                    else if (property.startsWith('!')) {
                        type[property.substring(1)] = BOOLEAN;
                    }
                    else if (property.startsWith('#')) {
                        type[property.substring(1)] = NUMBER;
                    }
                    else if (property.startsWith('%')) {
                        type[property.substring(1)] = OBJECT;
                    }
                    else {
                        type[property] = STRING;
                    }
                });
            });
        }
        SchemaInformation.prototype.allKnownElements = function () {
            return Object.keys(this.schema);
        };
        SchemaInformation.prototype.eventsOf = function (elementName) {
            var elementType = this.schema[elementName.toLowerCase()] || {};
            return Object.keys(elementType).filter(function (property) { return elementType[property] === EVENT; });
        };
        SchemaInformation.prototype.propertiesOf = function (elementName) {
            var elementType = this.schema[elementName.toLowerCase()] || {};
            return Object.keys(elementType).filter(function (property) { return elementType[property] !== EVENT; });
        };
        SchemaInformation.prototype.typeOf = function (elementName, property) {
            return (this.schema[elementName.toLowerCase()] || {})[property];
        };
        Object.defineProperty(SchemaInformation, "instance", {
            get: function () {
                var result = SchemaInformation._instance;
                if (!result) {
                    result = SchemaInformation._instance = new SchemaInformation();
                }
                return result;
            },
            enumerable: false,
            configurable: true
        });
        return SchemaInformation;
    }());
    exports.SchemaInformation = SchemaInformation;
    function eventNames(elementName) {
        return SchemaInformation.instance.eventsOf(elementName);
    }
    exports.eventNames = eventNames;
    function propertyNames(elementName) {
        return SchemaInformation.instance.propertiesOf(elementName);
    }
    exports.propertyNames = propertyNames;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9pbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvaHRtbF9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFXSCxJQUFNLE1BQU0sR0FBZTtRQUN6QixJQUFJO1FBQ0osT0FBTztRQUNQLE1BQU07UUFDTixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDZCxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztRQUNyQyxRQUFRO1FBQ1IsQ0FBQyxRQUFRLENBQUM7UUFDVixDQUFDLE9BQU8sQ0FBQztRQUNULENBQUMsU0FBUyxDQUFDO1FBQ1gsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN6QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDZixPQUFPO1FBQ1AsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDakcsQ0FBQyxTQUFTLENBQUM7UUFDWCxDQUFDLFVBQVUsQ0FBQztRQUNaLENBQUMsVUFBVSxDQUFDO1FBQ1osQ0FBQyxVQUFVLENBQUM7UUFDWixDQUFDLFVBQVUsQ0FBQztRQUNaLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDN0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUM3RSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFDekMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxF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Q0YsQ0FBQztJQUVGLElBQU0sUUFBUSxHQUErQjtRQUMzQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNwQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN0QixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMxQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDbkIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzFCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNwRCxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN6QixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDeEMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3BELE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xELEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDckIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDckIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDeEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDakMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzlCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDckIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDckIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDcEMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDL0MsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25DLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3pDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN6RCxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25ELEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzFCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNsQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN6QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDN0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUs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RUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUlELHNCQUFXLDZCQUFRO2lCQUFuQjtnQkFDRSxJQUFJLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1gsTUFBTSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7aUJBQ2hFO2dCQUNELE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7OztXQUFBO1FBQ0gsd0JBQUM7SUFBRCxDQUFDLEFBOURELElBOERDO0lBOURZLDhDQUFpQjtJQWdFOUIsU0FBZ0IsVUFBVSxDQUFDLFdBQW1CO1FBQzVDLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRkQsZ0NBRUM7SUFFRCxTQUFnQixhQUFhLENBQUMsV0FBbUI7UUFDL0MsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFGRCxzQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgSFRNTCBET00gZWxlbWVudHNcblxuLy8gVGhpcyBzZWN0aW9uIGRlZmluZXMgdGhlIEhUTUwgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZSBzdXJmYWNlIG9mIEhUTUwgNFxuLy8gd2hpY2ggaXMgZGVyaXZlZCBmcm9tIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNC9zdHJpY3QuZHRkXG50eXBlIGF0dHJUeXBlID0gc3RyaW5nfHN0cmluZ1tdO1xudHlwZSBoYXNoPFQ+ID0ge1xuICBbbmFtZTogc3RyaW5nXTogVFxufTtcblxuY29uc3QgdmFsdWVzOiBhdHRyVHlwZVtdID0gW1xuICAnSUQnLFxuICAnQ0RBVEEnLFxuICAnTkFNRScsXG4gIFsnbHRyJywgJ3J0bCddLFxuICBbJ3JlY3QnLCAnY2lyY2xlJywgJ3BvbHknLCAnZGVmYXVsdCddLFxuICAnTlVNQkVSJyxcbiAgWydub2hyZWYnXSxcbiAgWydpc21hcCddLFxuICBbJ2RlY2xhcmUnXSxcbiAgWydEQVRBJywgJ1JFRicsICdPQkpFQ1QnXSxcbiAgWydHRVQnLCAnUE9TVCddLFxuICAnSURSRUYnLFxuICBbJ1RFWFQnLCAnUEFTU1dPUkQnLCAnQ0hFQ0tCT1gnLCAnUkFESU8nLCAnU1VCTUlUJywgJ1JFU0VUJywgJ0ZJTEUnLCAnSElEREVOJywgJ0lNQUdFJywgJ0JVVFRPTiddLFxuICBbJ2NoZWNrZWQnXSxcbiAgWydkaXNhYmxlZCddLFxuICBbJ3JlYWRvbmx5J10sXG4gIFsnbXVsdGlwbGUnXSxcbiAgWydzZWxlY3RlZCddLFxuICBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgWyd2b2lkJywgJ2Fib3ZlJywgJ2JlbG93JywgJ2hzaWRlcycsICdsaHMnLCAncmhzJywgJ3ZzaWRlcycsICdib3gnLCAnYm9yZGVyJ10sXG4gIFsnbm9uZScsICdncm91cHMnLCAncm93cycsICdjb2xzJywgJ2FsbCddLFxuICBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknLCAnY2hhciddLFxuICBbJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ2Jhc2VsaW5lJ10sXG4gICdJRFJFRlMnLFxuICBbJ3JvdycsICdjb2wnLCAncm93Z3JvdXAnLCAnY29sZ3JvdXAnXSxcbiAgWydkZWZlciddXG5dO1xuXG5jb25zdCBncm91cHM6IGhhc2g8bnVtYmVyPltdID0gW1xuICB7aWQ6IDB9LFxuICB7XG4gICAgb25jbGljazogMSxcbiAgICBvbmRibGNsaWNrOiAxLFxuICAgIG9ubW91c2Vkb3duOiAxLFxuICAgIG9ubW91c2V1cDogMSxcbiAgICBvbm1vdXNlb3ZlcjogMSxcbiAgICBvbm1vdXNlbW92ZTogMSxcbiAgICBvbm1vdXNlb3V0OiAxLFxuICAgIG9ua2V5cHJlc3M6IDEsXG4gICAgb25rZXlkb3duOiAxLFxuICAgIG9ua2V5dXA6IDFcbiAgfSxcbiAge2xhbmc6IDIsIGRpcjogM30sXG4gIHtvbmxvYWQ6IDEsIG9udW5sb2FkOiAxfSxcbiAge25hbWU6IDF9LFxuICB7aHJlZjogMX0sXG4gIHt0eXBlOiAxfSxcbiAge2FsdDogMX0sXG4gIHt0YWJpbmRleDogNX0sXG4gIHttZWRpYTogMX0sXG4gIHtub2hyZWY6IDZ9LFxuICB7dXNlbWFwOiAxfSxcbiAge3NyYzogMX0sXG4gIHtvbmZvY3VzOiAxLCBvbmJsdXI6IDF9LFxuICB7Y2hhcnNldDogMX0sXG4gIHtkZWNsYXJlOiA4LCBjbGFzc2lkOiAxLCBjb2RlYmFzZTogMSwgZGF0YTogMSwgY29kZXR5cGU6IDEsIGFyY2hpdmU6IDEsIHN0YW5kYnk6IDF9LFxuICB7dGl0bGU6IDF9LFxuICB7dmFsdWU6IDF9LFxuICB7Y2l0ZTogMX0sXG4gIHtkYXRldGltZTogMX0sXG4gIHthY2NlcHQ6IDF9LFxuICB7c2hhcGU6IDQsIGNvb3JkczogMX0sXG4gIHsgZm9yOiAxMVxuICB9LFxuICB7YWN0aW9uOiAxLCBtZXRob2Q6IDEwLCBlbmN0eXBlOiAxLCBvbnN1Ym1pdDogMSwgb25yZXNldDogMSwgJ2FjY2VwdC1jaGFyc2V0JzogMX0sXG4gIHt2YWx1ZXR5cGU6IDl9LFxuICB7bG9uZ2Rlc2M6IDF9LFxuICB7d2lkdGg6IDF9LFxuICB7ZGlzYWJsZWQ6IDE0fSxcbiAge3JlYWRvbmx5OiAxNSwgb25zZWxlY3Q6IDF9LFxuICB7YWNjZXNza2V5OiAxfSxcbiAge3NpemU6IDUsIG11bHRpcGxlOiAxNn0sXG4gIHtvbmNoYW5nZTogMX0sXG4gIHtsYWJlbDogMX0sXG4gIHtzZWxlY3RlZDogMTd9LFxuICB7dHlwZTogMTIsIGNoZWNrZWQ6IDEzLCBzaXplOiAxLCBtYXhsZW5ndGg6IDV9LFxuICB7cm93czogNSwgY29sczogNX0sXG4gIHt0eXBlOiAxOH0sXG4gIHtoZWlnaHQ6IDF9LFxuICB7c3VtbWFyeTogMSwgYm9yZGVyOiAxLCBmcmFtZTogMTksIHJ1bGVzOiAyMCwgY2VsbHNwYWNpbmc6IDEsIGNlbGxwYWRkaW5nOiAxLCBkYXRhcGFnZXNpemU6IDF9LFxuICB7YWxpZ246IDIxLCBjaGFyOiAxLCBjaGFyb2ZmOiAxLCB2YWxpZ246IDIyfSxcbiAge3NwYW46IDV9LFxuICB7YWJicjogMSwgYXhpczogMSwgaGVhZGVyczogMjMsIHNjb3BlOiAyNCwgcm93c3BhbjogNSwgY29sc3BhbjogNX0sXG4gIHtwcm9maWxlOiAxfSxcbiAgeydodHRwLWVxdWl2JzogMiwgbmFtZTogMiwgY29udGVudDogMSwgc2NoZW1lOiAxfSxcbiAge2NsYXNzOiAxLCBzdHlsZTogMX0sXG4gIHtocmVmbGFuZzogMiwgcmVsOiAxLCByZXY6IDF9LFxuICB7aXNtYXA6IDd9LFxuICB7XG4gICAgZGVmZXI6IDI1LCBldmVudDogMSwgZm9yOiAxXG4gIH1cbl07XG5cbmNvbnN0IGVsZW1lbnRzOiB7W25hbWU6IHN0cmluZ106IG51bWJlcltdfSA9IHtcbiAgVFQ6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBJOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgQjogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIEJJRzogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIFNNQUxMOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgRU06IFswLCAxLCAyLCAxNiwgNDRdLFxuICBTVFJPTkc6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBERk46IFswLCAxLCAyLCAxNiwgNDRdLFxuICBDT0RFOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgU0FNUDogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIEtCRDogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIFZBUjogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIENJVEU6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBBQkJSOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgQUNST05ZTTogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIFNVQjogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIFNVUDogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIFNQQU46IFswLCAxLCAyLCAxNiwgNDRdLFxuICBCRE86IFswLCAyLCAxNiwgNDRdLFxuICBCUjogWzAsIDE2LCA0NF0sXG4gIEJPRFk6IFswLCAxLCAyLCAzLCAxNiwgNDRdLFxuICBBRERSRVNTOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgRElWOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgQTogWzAsIDEsIDIsIDQsIDUsIDYsIDgsIDEzLCAxNCwgMTYsIDIxLCAyOSwgNDQsIDQ1XSxcbiAgTUFQOiBbMCwgMSwgMiwgNCwgMTYsIDQ0XSxcbiAgQVJFQTogWzAsIDEsIDIsIDUsIDcsIDgsIDEwLCAxMywgMTYsIDIxLCAyOSwgNDRdLFxuICBMSU5LOiBbMCwgMSwgMiwgNSwgNiwgOSwgMTQsIDE2LCA0NCwgNDVdLFxuICBJTUc6IFswLCAxLCAyLCA0LCA3LCAxMSwgMTIsIDE2LCAyNSwgMjYsIDM3LCA0NCwgNDZdLFxuICBPQkpFQ1Q6IFswLCAxLCAyLCA0LCA2LCA4LCAxMSwgMTUsIDE2LCAyNiwgMzcsIDQ0XSxcbiAgUEFSQU06IFswLCA0LCA2LCAxNywgMjRdLFxuICBIUjogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIFA6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBIMTogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIEgyOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgSDM6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBINDogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIEg1OiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgSDY6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBQUkU6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBROiBbMCwgMSwgMiwgMTYsIDE4LCA0NF0sXG4gIEJMT0NLUVVPVEU6IFswLCAxLCAyLCAxNiwgMTgsIDQ0XSxcbiAgSU5TOiBbMCwgMSwgMiwgMTYsIDE4LCAxOSwgNDRdLFxuICBERUw6IFswLCAxLCAyLCAxNiwgMTgsIDE5LCA0NF0sXG4gIERMOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgRFQ6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBERDogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIE9MOiBbMCwgMSwgMiwgMTYsIDQ0XSxcbiAgVUw6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBMSTogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIEZPUk06IFswLCAxLCAyLCA0LCAxNiwgMjAsIDIzLCA0NF0sXG4gIExBQkVMOiBbMCwgMSwgMiwgMTMsIDE2LCAyMiwgMjksIDQ0XSxcbiAgSU5QVVQ6IFswLCAxLCAyLCA0LCA3LCA4LCAxMSwgMTIsIDEzLCAxNiwgMTcsIDIwLCAyNywgMjgsIDI5LCAzMSwgMzQsIDQ0LCA0Nl0sXG4gIFNFTEVDVDogWzAsIDEsIDIsIDQsIDgsIDEzLCAxNiwgMjcsIDMwLCAzMSwgNDRdLFxuICBPUFRHUk9VUDogWzAsIDEsIDIsIDE2LCAyNywgMzIsIDQ0XSxcbiAgT1BUSU9OOiBbMCwgMSwgMiwgMTYsIDE3LCAyNywgMzIsIDMzLCA0NF0sXG4gIFRFWFRBUkVBOiBbMCwgMSwgMiwgNCwgOCwgMTMsIDE2LCAyNywgMjgsIDI5LCAzMSwgMzUsIDQ0XSxcbiAgRklFTERTRVQ6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBMRUdFTkQ6IFswLCAxLCAyLCAxNiwgMjksIDQ0XSxcbiAgQlVUVE9OOiBbMCwgMSwgMiwgNCwgOCwgMTMsIDE2LCAxNywgMjcsIDI5LCAzNiwgNDRdLFxuICBUQUJMRTogWzAsIDEsIDIsIDE2LCAyNiwgMzgsIDQ0XSxcbiAgQ0FQVElPTjogWzAsIDEsIDIsIDE2LCA0NF0sXG4gIENPTEdST1VQOiBbMCwgMSwgMiwgMTYsIDI2LCAzOSwgNDAsIDQ0XSxcbiAgQ09MOiBbMCwgMSwgMiwgMTYsIDI2LCAzOSwgNDAsIDQ0XSxcbiAgVEhFQUQ6IFswLCAxLCAyLCAxNiwgMzksIDQ0XSxcbiAgVEJPRFk6IFswLCAxLCAyLCAxNiwgMzksIDQ0XSxcbiAgVEZPT1Q6IFswLCAxLCAyLCAxNiwgMzksIDQ0XSxcbiAgVFI6IFswLCAxLCAyLCAxNiwgMzksIDQ0XSxcbiAgVEg6IFswLCAxLCAyLCAxNiwgMzksIDQxLCA0NF0sXG4gIFREOiBbMCwgMSwgMiwgMTYsIDM5LCA0MSwgNDRdLFxuICBIRUFEOiBbMiwgNDJdLFxuICBUSVRMRTogWzJdLFxuICBCQVNFOiBbNV0sXG4gIE1FVEE6IFsyLCA0M10sXG4gIFNUWUxFOiBbMiwgNiwgOSwgMTZdLFxuICBTQ1JJUFQ6IFs2LCAxMiwgMTQsIDQ3XSxcbiAgTk9TQ1JJUFQ6IFswLCAxLCAyLCAxNiwgNDRdLFxuICBIVE1MOiBbMl1cbn07XG5cbmNvbnN0IGRlZmF1bHRBdHRyaWJ1dGVzID0gWzAsIDEsIDIsIDRdO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5zb3J0KCkubWFwKHYgPT4gdi50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZShpbmRleGVzOiBudW1iZXJbXXx1bmRlZmluZWQpOiBoYXNoPGF0dHJUeXBlPiB7XG4gIGNvbnN0IHJlc3VsdDogaGFzaDxhdHRyVHlwZT4gPSB7fTtcbiAgaWYgKGluZGV4ZXMpIHtcbiAgICBmb3IgKGxldCBpbmRleCBvZiBpbmRleGVzKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpbmRleF07XG4gICAgICBmb3IgKGxldCBuYW1lIGluIGdyb3VwKVxuICAgICAgICBpZiAoZ3JvdXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHJlc3VsdFtuYW1lXSA9IHZhbHVlc1tncm91cFtuYW1lXV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVOYW1lcyhlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb21wb3NlKGVsZW1lbnRzW2VsZW1lbnQudG9VcHBlckNhc2UoKV0gfHwgZGVmYXVsdEF0dHJpYnV0ZXMpKS5zb3J0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVUeXBlKGVsZW1lbnQ6IHN0cmluZywgYXR0cmlidXRlOiBzdHJpbmcpOiBzdHJpbmd8c3RyaW5nW118dW5kZWZpbmVkIHtcbiAgcmV0dXJuIGNvbXBvc2UoZWxlbWVudHNbZWxlbWVudC50b1VwcGVyQ2FzZSgpXSB8fCBkZWZhdWx0QXR0cmlidXRlcylbYXR0cmlidXRlLnRvTG93ZXJDYXNlKCldO1xufVxuXG4vLyBUaGlzIHNlY3Rpb24gaXMgZGVzY3JpYmVzIHRoZSBET00gcHJvcGVydHkgc3VyZmFjZSBvZiBhIERPTSBlbGVtZW50IGFuZCBpcyBkZXJpdmd1bHAgZm9ybWF0ZWRcbi8vIGZyb21cbi8vIGZyb20gdGhlIFNDSEVNQSBzdHJpbmdzIGZyb20gdGhlIHNlY3VyaXR5IGNvbnRleHQgaW5mb3JtYXRpb24uIFNDSEVNQSBpcyBjb3BpZWQgaGVyZSBiZWNhdXNlXG4vLyBpdCB3b3VsZCBiZSBhbiB1bm5lY2Vzc2FyeSByaXNrIHRvIGFsbG93IHRoaXMgYXJyYXkgdG8gYmUgaW1wb3J0ZWQgZnJvbSB0aGUgc2VjdXJpdHkgY29udGV4dFxuLy8gc2NoZW1hIHJlZ2lzdHJ5LlxuY29uc3QgU0NIRU1BOiBzdHJpbmdbXSA9IFtcbiAgJ1tFbGVtZW50XXx0ZXh0Q29udGVudCwlY2xhc3NMaXN0LGNsYXNzTmFtZSxpZCxpbm5lckhUTUwsKmJlZm9yZWNvcHksKmJlZm9yZWN1dCwqYmVmb3JlcGFzdGUsKmNvcHksKmN1dCwqcGFzdGUsKnNlYXJjaCwqc2VsZWN0c3RhcnQsKndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UsKndlYmtpdGZ1bGxzY3JlZW5lcnJvciwqd2hlZWwsb3V0ZXJIVE1MLCNzY3JvbGxMZWZ0LCNzY3JvbGxUb3Asc2xvdCcgK1xuICAgICAgLyogYWRkZWQgbWFudWFsbHkgdG8gYXZvaWQgYnJlYWtpbmcgY2hhbmdlcyAqL1xuICAgICAgJywqbWVzc2FnZSwqbW96ZnVsbHNjcmVlbmNoYW5nZSwqbW96ZnVsbHNjcmVlbmVycm9yLCptb3pwb2ludGVybG9ja2NoYW5nZSwqbW96cG9pbnRlcmxvY2tlcnJvciwqd2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvciwqd2ViZ2xjb250ZXh0bG9zdCwqd2ViZ2xjb250ZXh0cmVzdG9yZWQnLFxuICAnW0hUTUxFbGVtZW50XV5bRWxlbWVudF18YWNjZXNzS2V5LGNvbnRlbnRFZGl0YWJsZSxkaXIsIWRyYWdnYWJsZSwhaGlkZGVuLGlubmVyVGV4dCxsYW5nLCphYm9ydCwqYXV4Y2xpY2ssKmJsdXIsKmNhbmNlbCwqY2FucGxheSwqY2FucGxheXRocm91Z2gsKmNoYW5nZSwqY2xpY2ssKmNsb3NlLCpjb250ZXh0bWVudSwqY3VlY2hhbmdlLCpkYmxjbGljaywqZHJhZywqZHJhZ2VuZCwqZHJhZ2VudGVyLCpkcmFnbGVhdmUsKmRyYWdvdmVyLCpkcmFnc3RhcnQsKmRyb3AsKmR1cmF0aW9uY2hhbmdlLCplbXB0aWVkLCplbmRlZCwqZXJyb3IsKmZvY3VzLCpnb3Rwb2ludGVyY2FwdHVyZSwqaW5wdXQsKmludmFsaWQsKmtleWRvd24sKmtleXByZXNzLCprZXl1cCwqbG9hZCwqbG9hZGVkZGF0YSwqbG9hZGVkbWV0YWRhdGEsKmxvYWRzdGFydCwqbG9zdHBvaW50ZXJjYXB0dXJlLCptb3VzZWRvd24sKm1vdXNlZW50ZXIsKm1vdXNlbGVhdmUsKm1vdXNlbW92ZSwqbW91c2VvdXQsKm1vdXNlb3ZlciwqbW91c2V1cCwqbW91c2V3aGVlbCwqcGF1c2UsKnBsYXksKnBsYXlpbmcsKnBvaW50ZXJjYW5jZWwsKnBvaW50ZXJkb3duLCpwb2ludGVyZW50ZXIsKnBvaW50ZXJsZWF2ZSwqcG9pbnRlcm1vdmUsKnBvaW50ZXJvdXQsKnBvaW50ZXJvdmVyLCpwb2ludGVydXAsKnByb2dyZXNzLCpyYXRlY2hhbmdlLCpyZXNldCwqcmVzaXplLCpzY3JvbGwsKnNlZWtlZCwqc2Vla2luZywqc2VsZWN0LCpzaG93LCpzdGFsbGVkLCpzdWJtaXQsKnN1c3BlbmQsKnRpbWV1cGRhdGUsKnRvZ2dsZSwqdm9sdW1lY2hhbmdlLCp3YWl0aW5nLG91dGVyVGV4dCwhc3BlbGxjaGVjaywlc3R5bGUsI3RhYkluZGV4LHRpdGxlLCF0cmFuc2xhdGUnLFxuICAnYWJicixhZGRyZXNzLGFydGljbGUsYXNpZGUsYixiZGksYmRvLGNpdGUsY29kZSxkZCxkZm4sZHQsZW0sZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixpLGtiZCxtYWluLG1hcmssbmF2LG5vc2NyaXB0LHJiLHJwLHJ0LHJ0YyxydWJ5LHMsc2FtcCxzZWN0aW9uLHNtYWxsLHN0cm9uZyxzdWIsc3VwLHUsdmFyLHdicl5bSFRNTEVsZW1lbnRdfGFjY2Vzc0tleSxjb250ZW50RWRpdGFibGUsZGlyLCFkcmFnZ2FibGUsIWhpZGRlbixpbm5lclRleHQsbGFuZywqYWJvcnQsKmF1eGNsaWNrLCpibHVyLCpjYW5jZWwsKmNhbnBsYXksKmNhbnBsYXl0aHJvdWdoLCpjaGFuZ2UsKmNsaWNrLCpjbG9zZSwqY29udGV4dG1lbnUsKmN1ZWNoYW5nZSwqZGJsY2xpY2ssKmRyYWcsKmRyYWdlbmQsKmRyYWdlbnRlciwqZHJhZ2xlYXZlLCpkcmFnb3ZlciwqZHJhZ3N0YXJ0LCpkcm9wLCpkdXJhdGlvbmNoYW5nZSwqZW1wdGllZCwqZW5kZWQsKmVycm9yLCpmb2N1cywqZ290cG9pbnRlcmNhcHR1cmUsKmlucHV0LCppbnZhbGlkLCprZXlkb3duLCprZXlwcmVzcywqa2V5dXAsKmxvYWQsKmxvYWRlZGRhdGEsKmxvYWRlZG1ldGFkYXRhLCpsb2Fkc3RhcnQsKmxvc3Rwb2ludGVyY2FwdHVyZSwqbW91c2Vkb3duLCptb3VzZWVudGVyLCptb3VzZWxlYXZlLCptb3VzZW1vdmUsKm1vdXNlb3V0LCptb3VzZW92ZXIsKm1vdXNldXAsKm1vdXNld2hlZWwsKnBhdXNlLCpwbGF5LCpwbGF5aW5nLCpwb2ludGVyY2FuY2VsLCpwb2ludGVyZG93biwqcG9pbnRlcmVudGVyLCpwb2ludGVybGVhdmUsKnBvaW50ZXJtb3ZlLCpwb2ludGVyb3V0LCpwb2ludGVyb3ZlciwqcG9pbnRlcnVwLCpwcm9ncmVzcywqcmF0ZWNoYW5nZSwqcmVzZXQsKnJlc2l6ZSwqc2Nyb2xsLCpzZWVrZWQsKnNlZWtpbmcsKnNlbGVjdCwqc2hvdywqc3RhbGxlZCwqc3VibWl0LCpzdXNwZW5kLCp0aW1ldXBkYXRlLCp0b2dnbGUsKnZvbHVtZWNoYW5nZSwqd2FpdGluZyxvdXRlclRleHQsIXNwZWxsY2hlY2ssJXN0eWxlLCN0YWJJbmRleCx0aXRsZSwhdHJhbnNsYXRlJyxcbiAgJ21lZGlhXltIVE1MRWxlbWVudF18IWF1dG9wbGF5LCFjb250cm9scywlY29udHJvbHNMaXN0LCVjcm9zc09yaWdpbiwjY3VycmVudFRpbWUsIWRlZmF1bHRNdXRlZCwjZGVmYXVsdFBsYXliYWNrUmF0ZSwhZGlzYWJsZVJlbW90ZVBsYXliYWNrLCFsb29wLCFtdXRlZCwqZW5jcnlwdGVkLCp3YWl0aW5nZm9ya2V5LCNwbGF5YmFja1JhdGUscHJlbG9hZCxzcmMsJXNyY09iamVjdCwjdm9sdW1lJyxcbiAgJzpzdmc6XltIVE1MRWxlbWVudF18KmFib3J0LCphdXhjbGljaywqYmx1ciwqY2FuY2VsLCpjYW5wbGF5LCpjYW5wbGF5dGhyb3VnaCwqY2hhbmdlLCpjbGljaywqY2xvc2UsKmNvbnRleHRtZW51LCpjdWVjaGFuZ2UsKmRibGNsaWNrLCpkcmFnLCpkcmFnZW5kLCpkcmFnZW50ZXIsKmRyYWdsZWF2ZSwqZHJhZ292ZXIsKmRyYWdzdGFydCwqZHJvcCwqZHVyYXRpb25jaGFuZ2UsKmVtcHRpZWQsKmVuZGVkLCplcnJvciwqZm9jdXMsKmdvdHBvaW50ZXJjYXB0dXJlLCppbnB1dCwqaW52YWxpZCwqa2V5ZG93biwqa2V5cHJlc3MsKmtleXVwLCpsb2FkLCpsb2FkZWRkYXRhLCpsb2FkZWRtZXRhZGF0YSwqbG9hZHN0YXJ0LCpsb3N0cG9pbnRlcmNhcHR1cmUsKm1vdXNlZG93biwqbW91c2VlbnRlciwqbW91c2VsZWF2ZSwqbW91c2Vtb3ZlLCptb3VzZW91dCwqbW91c2VvdmVyLCptb3VzZXVwLCptb3VzZXdoZWVsLCpwYXVzZSwqcGxheSwqcGxheWluZywqcG9pbnRlcmNhbmNlbCwqcG9pbnRlcmRvd24sKnBvaW50ZXJlbnRlciwqcG9pbnRlcmxlYXZlLCpwb2ludGVybW92ZSwqcG9pbnRlcm91dCwqcG9pbnRlcm92ZXIsKnBvaW50ZXJ1cCwqcHJvZ3Jlc3MsKnJhdGVjaGFuZ2UsKnJlc2V0LCpyZXNpemUsKnNjcm9sbCwqc2Vla2VkLCpzZWVraW5nLCpzZWxlY3QsKnNob3csKnN0YWxsZWQsKnN1Ym1pdCwqc3VzcGVuZCwqdGltZXVwZGF0ZSwqdG9nZ2xlLCp2b2x1bWVjaGFuZ2UsKndhaXRpbmcsJXN0eWxlLCN0YWJJbmRleCcsXG4gICc6c3ZnOmdyYXBoaWNzXjpzdmc6fCcsXG4gICc6c3ZnOmFuaW1hdGlvbl46c3ZnOnwqYmVnaW4sKmVuZCwqcmVwZWF0JyxcbiAgJzpzdmc6Z2VvbWV0cnleOnN2Zzp8JyxcbiAgJzpzdmc6Y29tcG9uZW50VHJhbnNmZXJGdW5jdGlvbl46c3ZnOnwnLFxuICAnOnN2ZzpncmFkaWVudF46c3ZnOnwnLFxuICAnOnN2Zzp0ZXh0Q29udGVudF46c3ZnOmdyYXBoaWNzfCcsXG4gICc6c3ZnOnRleHRQb3NpdGlvbmluZ146c3ZnOnRleHRDb250ZW50fCcsXG4gICdhXltIVE1MRWxlbWVudF18Y2hhcnNldCxjb29yZHMsZG93bmxvYWQsaGFzaCxob3N0LGhvc3RuYW1lLGhyZWYsaHJlZmxhbmcsbmFtZSxwYXNzd29yZCxwYXRobmFtZSxwaW5nLHBvcnQscHJvdG9jb2wscmVmZXJyZXJQb2xpY3kscmVsLHJldixzZWFyY2gsc2hhcGUsdGFyZ2V0LHRleHQsdHlwZSx1c2VybmFtZScsXG4gICdhcmVhXltIVE1MRWxlbWVudF18YWx0LGNvb3Jkcyxkb3dubG9hZCxoYXNoLGhvc3QsaG9zdG5hbWUsaHJlZiwhbm9IcmVmLHBhc3N3b3JkLHBhdGhuYW1lLHBpbmcscG9ydCxwcm90b2NvbCxyZWZlcnJlclBvbGljeSxyZWwsc2VhcmNoLHNoYXBlLHRhcmdldCx1c2VybmFtZScsXG4gICdhdWRpb15tZWRpYXwnLFxuICAnYnJeW0hUTUxFbGVtZW50XXxjbGVhcicsXG4gICdiYXNlXltIVE1MRWxlbWVudF18aHJlZix0YXJnZXQnLFxuICAnYm9keV5bSFRNTEVsZW1lbnRdfGFMaW5rLGJhY2tncm91bmQsYmdDb2xvcixsaW5rLCpiZWZvcmV1bmxvYWQsKmJsdXIsKmVycm9yLCpmb2N1cywqaGFzaGNoYW5nZSwqbGFuZ3VhZ2VjaGFuZ2UsKmxvYWQsKm1lc3NhZ2UsKm9mZmxpbmUsKm9ubGluZSwqcGFnZWhpZGUsKnBhZ2VzaG93LCpwb3BzdGF0ZSwqcmVqZWN0aW9uaGFuZGxlZCwqcmVzaXplLCpzY3JvbGwsKnN0b3JhZ2UsKnVuaGFuZGxlZHJlamVjdGlvbiwqdW5sb2FkLHRleHQsdkxpbmsnLFxuICAnYnV0dG9uXltIVE1MRWxlbWVudF18IWF1dG9mb2N1cywhZGlzYWJsZWQsZm9ybUFjdGlvbixmb3JtRW5jdHlwZSxmb3JtTWV0aG9kLCFmb3JtTm9WYWxpZGF0ZSxmb3JtVGFyZ2V0LG5hbWUsdHlwZSx2YWx1ZScsXG4gICdjYW52YXNeW0hUTUxFbGVtZW50XXwjaGVpZ2h0LCN3aWR0aCcsXG4gICdjb250ZW50XltIVE1MRWxlbWVudF18c2VsZWN0JyxcbiAgJ2RsXltIVE1MRWxlbWVudF18IWNvbXBhY3QnLFxuICAnZGF0YWxpc3ReW0hUTUxFbGVtZW50XXwnLFxuICAnZGV0YWlsc15bSFRNTEVsZW1lbnRdfCFvcGVuJyxcbiAgJ2RpYWxvZ15bSFRNTEVsZW1lbnRdfCFvcGVuLHJldHVyblZhbHVlJyxcbiAgJ2Rpcl5bSFRNTEVsZW1lbnRdfCFjb21wYWN0JyxcbiAgJ2Rpdl5bSFRNTEVsZW1lbnRdfGFsaWduJyxcbiAgJ2VtYmVkXltIVE1MRWxlbWVudF18YWxpZ24saGVpZ2h0LG5hbWUsc3JjLHR5cGUsd2lkdGgnLFxuICAnZmllbGRzZXReW0hUTUxFbGVtZW50XXwhZGlzYWJsZWQsbmFtZScsXG4gICdmb250XltIVE1MRWxlbWVudF18Y29sb3IsZmFjZSxzaXplJyxcbiAgJ2Zvcm1eW0hUTUxFbGVtZW50XXxhY2NlcHRDaGFyc2V0LGFjdGlvbixhdXRvY29tcGxldGUsZW5jb2RpbmcsZW5jdHlwZSxtZXRob2QsbmFtZSwhbm9WYWxpZGF0ZSx0YXJnZXQnLFxuICAnZnJhbWVeW0hUTUxFbGVtZW50XXxmcmFtZUJvcmRlcixsb25nRGVzYyxtYXJnaW5IZWlnaHQsbWFyZ2luV2lkdGgsbmFtZSwhbm9SZXNpemUsc2Nyb2xsaW5nLHNyYycsXG4gICdmcmFtZXNldF5bSFRNTEVsZW1lbnRdfGNvbHMsKmJlZm9yZXVubG9hZCwqYmx1ciwqZXJyb3IsKmZvY3VzLCpoYXNoY2hhbmdlLCpsYW5ndWFnZWNoYW5nZSwqbG9hZCwqbWVzc2FnZSwqb2ZmbGluZSwqb25saW5lLCpwYWdlaGlkZSwqcGFnZXNob3csKnBvcHN0YXRlLCpyZWplY3Rpb25oYW5kbGVkLCpyZXNpemUsKnNjcm9sbCwqc3RvcmFnZSwqdW5oYW5kbGVkcmVqZWN0aW9uLCp1bmxvYWQscm93cycsXG4gICdocl5bSFRNTEVsZW1lbnRdfGFsaWduLGNvbG9yLCFub1NoYWRlLHNpemUsd2lkdGgnLFxuICAnaGVhZF5bSFRNTEVsZW1lbnRdfCcsXG4gICdoMSxoMixoMyxoNCxoNSxoNl5bSFRNTEVsZW1lbnRdfGFsaWduJyxcbiAgJ2h0bWxeW0hUTUxFbGVtZW50XXx2ZXJzaW9uJyxcbiAgJ2lmcmFtZV5bSFRNTEVsZW1lbnRdfGFsaWduLCFhbGxvd0Z1bGxzY3JlZW4sZnJhbWVCb3JkZXIsaGVpZ2h0LGxvbmdEZXNjLG1hcmdpbkhlaWdodCxtYXJnaW5XaWR0aCxuYW1lLHJlZmVycmVyUG9saWN5LCVzYW5kYm94LHNjcm9sbGluZyxzcmMsc3JjZG9jLHdpZHRoJyxcbiAgJ2ltZ15bSFRNTEVsZW1lbnRdfGFsaWduLGFsdCxib3JkZXIsJWNyb3NzT3JpZ2luLCNoZWlnaHQsI2hzcGFjZSwhaXNNYXAsbG9uZ0Rlc2MsbG93c3JjLG5hbWUscmVmZXJyZXJQb2xpY3ksc2l6ZXMsc3JjLHNyY3NldCx1c2VNYXAsI3ZzcGFjZSwjd2lkdGgnLFxuICAnaW5wdXReW0hUTUxFbGVtZW50XXxhY2NlcHQsYWxpZ24sYWx0LGF1dG9jYXBpdGFsaXplLGF1dG9jb21wbGV0ZSwhYXV0b2ZvY3VzLCFjaGVja2VkLCFkZWZhdWx0Q2hlY2tlZCxkZWZhdWx0VmFsdWUsZGlyTmFtZSwhZGlzYWJsZWQsJWZpbGVzLGZvcm1BY3Rpb24sZm9ybUVuY3R5cGUsZm9ybU1ldGhvZCwhZm9ybU5vVmFsaWRhdGUsZm9ybVRhcmdldCwjaGVpZ2h0LCFpbmNyZW1lbnRhbCwhaW5kZXRlcm1pbmF0ZSxtYXgsI21heExlbmd0aCxtaW4sI21pbkxlbmd0aCwhbXVsdGlwbGUsbmFtZSxwYXR0ZXJuLHBsYWNlaG9sZGVyLCFyZWFkT25seSwhcmVxdWlyZWQsc2VsZWN0aW9uRGlyZWN0aW9uLCNzZWxlY3Rpb25FbmQsI3NlbGVjdGlvblN0YXJ0LCNzaXplLHNyYyxzdGVwLHR5cGUsdXNlTWFwLHZhbHVlLCV2YWx1ZUFzRGF0ZSwjdmFsdWVBc051bWJlciwjd2lkdGgnLFxuICAnbGleW0hUTUxFbGVtZW50XXx0eXBlLCN2YWx1ZScsXG4gICdsYWJlbF5bSFRNTEVsZW1lbnRdfGh0bWxGb3InLFxuICAnbGVnZW5kXltIVE1MRWxlbWVudF18YWxpZ24nLFxuICAnbGlua15bSFRNTEVsZW1lbnRdfGFzLGNoYXJzZXQsJWNyb3NzT3JpZ2luLCFkaXNhYmxlZCxocmVmLGhyZWZsYW5nLGludGVncml0eSxtZWRpYSxyZWZlcnJlclBvbGljeSxyZWwsJXJlbExpc3QscmV2LCVzaXplcyx0YXJnZXQsdHlwZScsXG4gICdtYXBeW0hUTUxFbGVtZW50XXxuYW1lJyxcbiAgJ21hcnF1ZWVeW0hUTUxFbGVtZW50XXxiZWhhdmlvcixiZ0NvbG9yLGRpcmVjdGlvbixoZWlnaHQsI2hzcGFjZSwjbG9vcCwjc2Nyb2xsQW1vdW50LCNzY3JvbGxEZWxheSwhdHJ1ZVNwZWVkLCN2c3BhY2Usd2lkdGgnLFxuICAnbWVudV5bSFRNTEVsZW1lbnRdfCFjb21wYWN0JyxcbiAgJ21ldGFeW0hUTUxFbGVtZW50XXxjb250ZW50LGh0dHBFcXVpdixuYW1lLHNjaGVtZScsXG4gICdtZXRlcl5bSFRNTEVsZW1lbnRdfCNoaWdoLCNsb3csI21heCwjbWluLCNvcHRpbXVtLCN2YWx1ZScsXG4gICdpbnMsZGVsXltIVE1MRWxlbWVudF18Y2l0ZSxkYXRlVGltZScsXG4gICdvbF5bSFRNTEVsZW1lbnRdfCFjb21wYWN0LCFyZXZlcnNlZCwjc3RhcnQsdHlwZScsXG4gICdvYmplY3ReW0hUTUxFbGVtZW50XXxhbGlnbixhcmNoaXZlLGJvcmRlcixjb2RlLGNvZGVCYXNlLGNvZGVUeXBlLGRhdGEsIWRlY2xhcmUsaGVpZ2h0LCNoc3BhY2UsbmFtZSxzdGFuZGJ5LHR5cGUsdXNlTWFwLCN2c3BhY2Usd2lkdGgnLFxuICAnb3B0Z3JvdXBeW0hUTUxFbGVtZW50XXwhZGlzYWJsZWQsbGFiZWwnLFxuICAnb3B0aW9uXltIVE1MRWxlbWVudF18IWRlZmF1bHRTZWxlY3RlZCwhZGlzYWJsZWQsbGFiZWwsIXNlbGVjdGVkLHRleHQsdmFsdWUnLFxuICAnb3V0cHV0XltIVE1MRWxlbWVudF18ZGVmYXVsdFZhbHVlLCVodG1sRm9yLG5hbWUsdmFsdWUnLFxuICAncF5bSFRNTEVsZW1lbnRdfGFsaWduJyxcbiAgJ3BhcmFtXltIVE1MRWxlbWVudF18bmFtZSx0eXBlLHZhbHVlLHZhbHVlVHlwZScsXG4gICdwaWN0dXJlXltIVE1MRWxlbWVudF18JyxcbiAgJ3ByZV5bSFRNTEVsZW1lbnRdfCN3aWR0aCcsXG4gICdwcm9ncmVzc15bSFRNTEVsZW1lbnRdfCNtYXgsI3ZhbHVlJyxcbiAgJ3EsYmxvY2txdW90ZSxjaXRlXltIVE1MRWxlbWVudF18JyxcbiAgJ3NjcmlwdF5bSFRNTEVsZW1lbnRdfCFhc3luYyxjaGFyc2V0LCVjcm9zc09yaWdpbiwhZGVmZXIsZXZlbnQsaHRtbEZvcixpbnRlZ3JpdHksc3JjLHRleHQsdHlwZScsXG4gICdzZWxlY3ReW0hUTUxFbGVtZW50XXwhYXV0b2ZvY3VzLCFkaXNhYmxlZCwjbGVuZ3RoLCFtdWx0aXBsZSxuYW1lLCFyZXF1aXJlZCwjc2VsZWN0ZWRJbmRleCwjc2l6ZSx2YWx1ZScsXG4gICdzaGFkb3deW0hUTUxFbGVtZW50XXwnLFxuICAnc2xvdF5bSFRNTEVsZW1lbnRdfG5hbWUnLFxuICAnc291cmNlXltIVE1MRWxlbWVudF18bWVkaWEsc2l6ZXMsc3JjLHNyY3NldCx0eXBlJyxcbiAgJ3NwYW5eW0hUTUxFbGVtZW50XXwnLFxuICAnc3R5bGVeW0hUTUxFbGVtZW50XXwhZGlzYWJsZWQsbWVkaWEsdHlwZScsXG4gICdjYXB0aW9uXltIVE1MRWxlbWVudF18YWxpZ24nLFxuICAndGgsdGReW0hUTUxFbGVtZW50XXxhYmJyLGFsaWduLGF4aXMsYmdDb2xvcixjaCxjaE9mZiwjY29sU3BhbixoZWFkZXJzLGhlaWdodCwhbm9XcmFwLCNyb3dTcGFuLHNjb3BlLHZBbGlnbix3aWR0aCcsXG4gICdjb2wsY29sZ3JvdXBeW0hUTUxFbGVtZW50XXxhbGlnbixjaCxjaE9mZiwjc3Bhbix2QWxpZ24sd2lkdGgnLFxuICAndGFibGVeW0hUTUxFbGVtZW50XXxhbGlnbixiZ0NvbG9yLGJvcmRlciwlY2FwdGlvbixjZWxsUGFkZGluZyxjZWxsU3BhY2luZyxmcmFtZSxydWxlcyxzdW1tYXJ5LCV0Rm9vdCwldEhlYWQsd2lkdGgnLFxuICAndHJeW0hUTUxFbGVtZW50XXxhbGlnbixiZ0NvbG9yLGNoLGNoT2ZmLHZBbGlnbicsXG4gICd0Zm9vdCx0aGVhZCx0Ym9keV5bSFRNTEVsZW1lbnRdfGFsaWduLGNoLGNoT2ZmLHZBbGlnbicsXG4gICd0ZW1wbGF0ZV5bSFRNTEVsZW1lbnRdfCcsXG4gICd0ZXh0YXJlYV5bSFRNTEVsZW1lbnRdfGF1dG9jYXBpdGFsaXplLCFhdXRvZm9jdXMsI2NvbHMsZGVmYXVsdFZhbHVlLGRpck5hbWUsIWRpc2FibGVkLCNtYXhMZW5ndGgsI21pbkxlbmd0aCxuYW1lLHBsYWNlaG9sZGVyLCFyZWFkT25seSwhcmVxdWlyZWQsI3Jvd3Msc2VsZWN0aW9uRGlyZWN0aW9uLCNzZWxlY3Rpb25FbmQsI3NlbGVjdGlvblN0YXJ0LHZhbHVlLHdyYXAnLFxuICAndGl0bGVeW0hUTUxFbGVtZW50XXx0ZXh0JyxcbiAgJ3RyYWNrXltIVE1MRWxlbWVudF18IWRlZmF1bHQsa2luZCxsYWJlbCxzcmMsc3JjbGFuZycsXG4gICd1bF5bSFRNTEVsZW1lbnRdfCFjb21wYWN0LHR5cGUnLFxuICAndW5rbm93bl5bSFRNTEVsZW1lbnRdfCcsXG4gICd2aWRlb15tZWRpYXwjaGVpZ2h0LHBvc3Rlciwjd2lkdGgnLFxuICAnOnN2ZzphXjpzdmc6Z3JhcGhpY3N8JyxcbiAgJzpzdmc6YW5pbWF0ZV46c3ZnOmFuaW1hdGlvbnwnLFxuICAnOnN2ZzphbmltYXRlTW90aW9uXjpzdmc6YW5pbWF0aW9ufCcsXG4gICc6c3ZnOmFuaW1hdGVUcmFuc2Zvcm1eOnN2ZzphbmltYXRpb258JyxcbiAgJzpzdmc6Y2lyY2xlXjpzdmc6Z2VvbWV0cnl8JyxcbiAgJzpzdmc6Y2xpcFBhdGheOnN2ZzpncmFwaGljc3wnLFxuICAnOnN2ZzpkZWZzXjpzdmc6Z3JhcGhpY3N8JyxcbiAgJzpzdmc6ZGVzY146c3ZnOnwnLFxuICAnOnN2ZzpkaXNjYXJkXjpzdmc6fCcsXG4gICc6c3ZnOmVsbGlwc2VeOnN2ZzpnZW9tZXRyeXwnLFxuICAnOnN2ZzpmZUJsZW5kXjpzdmc6fCcsXG4gICc6c3ZnOmZlQ29sb3JNYXRyaXheOnN2Zzp8JyxcbiAgJzpzdmc6ZmVDb21wb25lbnRUcmFuc2Zlcl46c3ZnOnwnLFxuICAnOnN2ZzpmZUNvbXBvc2l0ZV46c3ZnOnwnLFxuICAnOnN2ZzpmZUNvbnZvbHZlTWF0cml4Xjpzdmc6fCcsXG4gICc6c3ZnOmZlRGlmZnVzZUxpZ2h0aW5nXjpzdmc6fCcsXG4gICc6c3ZnOmZlRGlzcGxhY2VtZW50TWFwXjpzdmc6fCcsXG4gICc6c3ZnOmZlRGlzdGFudExpZ2h0Xjpzdmc6fCcsXG4gICc6c3ZnOmZlRHJvcFNoYWRvd146c3ZnOnwnLFxuICAnOnN2ZzpmZUZsb29kXjpzdmc6fCcsXG4gICc6c3ZnOmZlRnVuY0FeOnN2Zzpjb21wb25lbnRUcmFuc2ZlckZ1bmN0aW9ufCcsXG4gICc6c3ZnOmZlRnVuY0JeOnN2Zzpjb21wb25lbnRUcmFuc2ZlckZ1bmN0aW9ufCcsXG4gICc6c3ZnOmZlRnVuY0deOnN2Zzpjb21wb25lbnRUcmFuc2ZlckZ1bmN0aW9ufCcsXG4gICc6c3ZnOmZlRnVuY1JeOnN2Zzpjb21wb25lbnRUcmFuc2ZlckZ1bmN0aW9ufCcsXG4gICc6c3ZnOmZlR2F1c3NpYW5CbHVyXjpzdmc6fCcsXG4gICc6c3ZnOmZlSW1hZ2VeOnN2Zzp8JyxcbiAgJzpzdmc6ZmVNZXJnZV46c3ZnOnwnLFxuICAnOnN2ZzpmZU1lcmdlTm9kZV46c3ZnOnwnLFxuICAnOnN2ZzpmZU1vcnBob2xvZ3leOnN2Zzp8JyxcbiAgJzpzdmc6ZmVPZmZzZXReOnN2Zzp8JyxcbiAgJzpzdmc6ZmVQb2ludExpZ2h0Xjpzdmc6fCcsXG4gICc6c3ZnOmZlU3BlY3VsYXJMaWdodGluZ146c3ZnOnwnLFxuICAnOnN2ZzpmZVNwb3RMaWdodF46c3ZnOnwnLFxuICAnOnN2ZzpmZVRpbGVeOnN2Zzp8JyxcbiAgJzpzdmc6ZmVUdXJidWxlbmNlXjpzdmc6fCcsXG4gICc6c3ZnOmZpbHRlcl46c3ZnOnwnLFxuICAnOnN2Zzpmb3JlaWduT2JqZWN0Xjpzdmc6Z3JhcGhpY3N8JyxcbiAgJzpzdmc6Z146c3ZnOmdyYXBoaWNzfCcsXG4gICc6c3ZnOmltYWdlXjpzdmc6Z3JhcGhpY3N8JyxcbiAgJzpzdmc6bGluZV46c3ZnOmdlb21ldHJ5fCcsXG4gICc6c3ZnOmxpbmVhckdyYWRpZW50Xjpzdmc6Z3JhZGllbnR8JyxcbiAgJzpzdmc6bXBhdGheOnN2Zzp8JyxcbiAgJzpzdmc6bWFya2VyXjpzdmc6fCcsXG4gICc6c3ZnOm1hc2teOnN2Zzp8JyxcbiAgJzpzdmc6bWV0YWRhdGFeOnN2Zzp8JyxcbiAgJzpzdmc6cGF0aF46c3ZnOmdlb21ldHJ5fCcsXG4gICc6c3ZnOnBhdHRlcm5eOnN2Zzp8JyxcbiAgJzpzdmc6cG9seWdvbl46c3ZnOmdlb21ldHJ5fCcsXG4gICc6c3ZnOnBvbHlsaW5lXjpzdmc6Z2VvbWV0cnl8JyxcbiAgJzpzdmc6cmFkaWFsR3JhZGllbnReOnN2ZzpncmFkaWVudHwnLFxuICAnOnN2ZzpyZWN0Xjpzdmc6Z2VvbWV0cnl8JyxcbiAgJzpzdmc6c3ZnXjpzdmc6Z3JhcGhpY3N8I2N1cnJlbnRTY2FsZSwjem9vbUFuZFBhbicsXG4gICc6c3ZnOnNjcmlwdF46c3ZnOnx0eXBlJyxcbiAgJzpzdmc6c2V0Xjpzdmc6YW5pbWF0aW9ufCcsXG4gICc6c3ZnOnN0b3BeOnN2Zzp8JyxcbiAgJzpzdmc6c3R5bGVeOnN2Zzp8IWRpc2FibGVkLG1lZGlhLHRpdGxlLHR5cGUnLFxuICAnOnN2Zzpzd2l0Y2heOnN2ZzpncmFwaGljc3wnLFxuICAnOnN2ZzpzeW1ib2xeOnN2Zzp8JyxcbiAgJzpzdmc6dHNwYW5eOnN2Zzp0ZXh0UG9zaXRpb25pbmd8JyxcbiAgJzpzdmc6dGV4dF46c3ZnOnRleHRQb3NpdGlvbmluZ3wnLFxuICAnOnN2Zzp0ZXh0UGF0aF46c3ZnOnRleHRDb250ZW50fCcsXG4gICc6c3ZnOnRpdGxlXjpzdmc6fCcsXG4gICc6c3ZnOnVzZV46c3ZnOmdyYXBoaWNzfCcsXG4gICc6c3ZnOnZpZXdeOnN2Zzp8I3pvb21BbmRQYW4nLFxuICAnZGF0YV5bSFRNTEVsZW1lbnRdfHZhbHVlJyxcbiAgJ2tleWdlbl5bSFRNTEVsZW1lbnRdfCFhdXRvZm9jdXMsY2hhbGxlbmdlLCFkaXNhYmxlZCxmb3JtLGtleXR5cGUsbmFtZScsXG4gICdtZW51aXRlbV5bSFRNTEVsZW1lbnRdfHR5cGUsbGFiZWwsaWNvbiwhZGlzYWJsZWQsIWNoZWNrZWQscmFkaW9ncm91cCwhZGVmYXVsdCcsXG4gICdzdW1tYXJ5XltIVE1MRWxlbWVudF18JyxcbiAgJ3RpbWVeW0hUTUxFbGVtZW50XXxkYXRlVGltZScsXG4gICc6c3ZnOmN1cnNvcl46c3ZnOnwnLFxuXTtcblxuY29uc3QgRVZFTlQgPSAnZXZlbnQnO1xuY29uc3QgQk9PTEVBTiA9ICdib29sZWFuJztcbmNvbnN0IE5VTUJFUiA9ICdudW1iZXInO1xuY29uc3QgU1RSSU5HID0gJ3N0cmluZyc7XG5jb25zdCBPQkpFQ1QgPSAnb2JqZWN0JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUluZm9ybWF0aW9uIHtcbiAgc2NoZW1hID0gPHtbZWxlbWVudDogc3RyaW5nXToge1twcm9wZXJ0eTogc3RyaW5nXTogc3RyaW5nfX0+e307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgU0NIRU1BLmZvckVhY2goZW5jb2RlZFR5cGUgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBlbmNvZGVkVHlwZS5zcGxpdCgnfCcpO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IHBhcnRzWzFdLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCB0eXBlUGFydHMgPSAocGFydHNbMF0gKyAnXicpLnNwbGl0KCdeJyk7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVQYXJ0c1swXTtcbiAgICAgIGNvbnN0IHR5cGUgPSA8e1twcm9wZXJ0eTogc3RyaW5nXTogc3RyaW5nfT57fTtcbiAgICAgIHR5cGVOYW1lLnNwbGl0KCcsJykuZm9yRWFjaCh0YWcgPT4gdGhpcy5zY2hlbWFbdGFnLnRvTG93ZXJDYXNlKCldID0gdHlwZSk7XG4gICAgICBjb25zdCBzdXBlck5hbWUgPSB0eXBlUGFydHNbMV07XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBzdXBlck5hbWUgJiYgdGhpcy5zY2hlbWFbc3VwZXJOYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgICAgaWYgKHN1cGVyVHlwZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdXBlclR5cGUpIHtcbiAgICAgICAgICB0eXBlW2tleV0gPSBzdXBlclR5cGVba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJycpIHtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICAgICAgICB0eXBlW3Byb3BlcnR5LnN1YnN0cmluZygxKV0gPSBFVkVOVDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKCchJykpIHtcbiAgICAgICAgICB0eXBlW3Byb3BlcnR5LnN1YnN0cmluZygxKV0gPSBCT09MRUFOO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICAgIHR5cGVbcHJvcGVydHkuc3Vic3RyaW5nKDEpXSA9IE5VTUJFUjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKCclJykpIHtcbiAgICAgICAgICB0eXBlW3Byb3BlcnR5LnN1YnN0cmluZygxKV0gPSBPQkpFQ1Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVtwcm9wZXJ0eV0gPSBTVFJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWxsS25vd25FbGVtZW50cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKTtcbiAgfVxuXG4gIGV2ZW50c09mKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZWxlbWVudFR5cGUgPSB0aGlzLnNjaGVtYVtlbGVtZW50TmFtZS50b0xvd2VyQ2FzZSgpXSB8fCB7fTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZWxlbWVudFR5cGUpLmZpbHRlcihwcm9wZXJ0eSA9PiBlbGVtZW50VHlwZVtwcm9wZXJ0eV0gPT09IEVWRU5UKTtcbiAgfVxuXG4gIHByb3BlcnRpZXNPZihlbGVtZW50TmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGVsZW1lbnRUeXBlID0gdGhpcy5zY2hlbWFbZWxlbWVudE5hbWUudG9Mb3dlckNhc2UoKV0gfHwge307XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVsZW1lbnRUeXBlKS5maWx0ZXIocHJvcGVydHkgPT4gZWxlbWVudFR5cGVbcHJvcGVydHldICE9PSBFVkVOVCk7XG4gIH1cblxuICB0eXBlT2YoZWxlbWVudE5hbWU6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYVtlbGVtZW50TmFtZS50b0xvd2VyQ2FzZSgpXSB8fCB7fSlbcHJvcGVydHldO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTY2hlbWFJbmZvcm1hdGlvbjtcblxuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFNjaGVtYUluZm9ybWF0aW9uIHtcbiAgICBsZXQgcmVzdWx0ID0gU2NoZW1hSW5mb3JtYXRpb24uX2luc3RhbmNlO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSBTY2hlbWFJbmZvcm1hdGlvbi5faW5zdGFuY2UgPSBuZXcgU2NoZW1hSW5mb3JtYXRpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnROYW1lcyhlbGVtZW50TmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gU2NoZW1hSW5mb3JtYXRpb24uaW5zdGFuY2UuZXZlbnRzT2YoZWxlbWVudE5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlOYW1lcyhlbGVtZW50TmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gU2NoZW1hSW5mb3JtYXRpb24uaW5zdGFuY2UucHJvcGVydGllc09mKGVsZW1lbnROYW1lKTtcbn1cbiJdfQ==