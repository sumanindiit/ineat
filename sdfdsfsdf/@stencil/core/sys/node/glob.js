!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e){t.exports=require("path")},function(t,e){t.exports=require("fs")},function(t,e,r){t.exports=f,f.Minimatch=p;var n={sep:"/"};try{n=r(0)}catch(t){}var i=f.GLOBSTAR=p.GLOBSTAR={},s=r(13),o={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},a="[^/]",c="[^/]*?",h="().*{}+?[]^$\\!".split("").reduce((function(t,e){return t[e]=!0,t}),{});var u=/\/+/;function l(t,e){t=t||{},e=e||{};var r={};return Object.keys(e).forEach((function(t){r[t]=e[t]})),Object.keys(t).forEach((function(e){r[e]=t[e]})),r}function f(t,e,r){if("string"!=typeof e)throw new TypeError("glob pattern string required");return r||(r={}),!(!r.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new p(e,r).match(t))}function p(t,e){if(!(this instanceof p))return new p(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==n.sep&&(t=t.split(n.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function d(t,e){if(e||(e=this instanceof p?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:s(t)}f.filter=function(t,e){return e=e||{},function(r,n,i){return f(r,t,e)}},f.defaults=function(t){if(!t||!Object.keys(t).length)return f;var e=f,r=function(r,n,i){return e.minimatch(r,n,l(t,i))};return r.Minimatch=function(r,n){return new e.Minimatch(r,l(t,n))},r},p.defaults=function(t){return t&&Object.keys(t).length?f.defaults(t).Minimatch:p},p.prototype.debug=function(){},p.prototype.make=function(){if(this._made)return;var t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();var r=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error);this.debug(this.pattern,r),r=this.globParts=r.map((function(t){return t.split(u)})),this.debug(this.pattern,r),r=r.map((function(t,e,r){return t.map(this.parse,this)}),this),this.debug(this.pattern,r),r=r.filter((function(t){return-1===t.indexOf(!1)})),this.debug(this.pattern,r),this.set=r},p.prototype.parseNegate=function(){var t=this.pattern,e=!1,r=this.options,n=0;if(r.nonegate)return;for(var i=0,s=t.length;i<s&&"!"===t.charAt(i);i++)e=!e,n++;n&&(this.pattern=t.substr(n));this.negate=e},f.braceExpand=function(t,e){return d(t,e)},p.prototype.braceExpand=d,p.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var r=this.options;if(!r.noglobstar&&"**"===t)return i;if(""===t)return"";var n,s="",u=!!r.nocase,l=!1,f=[],p=[],d=!1,m=-1,v=-1,y="."===t.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",b=this;function _(){if(n){switch(n){case"*":s+=c,u=!0;break;case"?":s+=a,u=!0;break;default:s+="\\"+n}b.debug("clearStateChar %j %j",n,s),n=!1}}for(var w,O=0,E=t.length;O<E&&(w=t.charAt(O));O++)if(this.debug("%s\t%s %s %j",t,O,s,w),l&&h[w])s+="\\"+w,l=!1;else switch(w){case"/":return!1;case"\\":_(),l=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,O,s,w),d){this.debug("  in class"),"!"===w&&O===v+1&&(w="^"),s+=w;continue}b.debug("call clearStateChar %j",n),_(),n=w,r.noext&&_();continue;case"(":if(d){s+="(";continue}if(!n){s+="\\(";continue}f.push({type:n,start:O-1,reStart:s.length,open:o[n].open,close:o[n].close}),s+="!"===n?"(?:(?!(?:":"(?:",this.debug("plType %j %j",n,s),n=!1;continue;case")":if(d||!f.length){s+="\\)";continue}_(),u=!0;var k=f.pop();s+=k.close,"!"===k.type&&p.push(k),k.reEnd=s.length;continue;case"|":if(d||!f.length||l){s+="\\|",l=!1;continue}_(),s+="|";continue;case"[":if(_(),d){s+="\\"+w;continue}d=!0,v=O,m=s.length,s+=w;continue;case"]":if(O===v+1||!d){s+="\\"+w,l=!1;continue}if(d){var A=t.substring(v+1,O);try{RegExp("["+A+"]")}catch(t){var S=this.parse(A,g);s=s.substr(0,m)+"\\["+S[0]+"\\]",u=u||S[1],d=!1;continue}}u=!0,d=!1,s+=w;continue;default:_(),l?l=!1:!h[w]||"^"===w&&d||(s+="\\"),s+=w}d&&(A=t.substr(v+1),S=this.parse(A,g),s=s.substr(0,m)+"\\["+S[0],u=u||S[1]);for(k=f.pop();k;k=f.pop()){var j=s.slice(k.reStart+k.open.length);this.debug("setting tail",s,k),j=j.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,r){return r||(r="\\"),e+e+r+"|"})),this.debug("tail=%j\n   %s",j,j,k,s);var x="*"===k.type?c:"?"===k.type?a:"\\"+k.type;u=!0,s=s.slice(0,k.reStart)+x+"\\("+j}_(),l&&(s+="\\\\");var I=!1;switch(s.charAt(0)){case".":case"[":case"(":I=!0}for(var L=p.length-1;L>-1;L--){var R=p[L],N=s.slice(0,R.reStart),T=s.slice(R.reStart,R.reEnd-8),M=s.slice(R.reEnd-8,R.reEnd),C=s.slice(R.reEnd);M+=C;var D=N.split("(").length-1,P=C;for(O=0;O<D;O++)P=P.replace(/\)[+*?]?/,"");var G="";""===(C=P)&&e!==g&&(G="$"),s=N+T+C+G+M}""!==s&&u&&(s="(?=.)"+s);I&&(s=y+s);if(e===g)return[s,u];if(!u)return function(t){return t.replace(/\\(.)/g,"$1")}(t);var $=r.nocase?"i":"";try{var F=new RegExp("^"+s+"$",$)}catch(t){return new RegExp("$.")}return F._glob=t,F._src=s,F};var g={};f.makeRe=function(t,e){return new p(t,e||{}).makeRe()},p.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,r=e.noglobstar?c:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",n=e.nocase?"i":"",s=t.map((function(t){return t.map((function(t){return t===i?r:"string"==typeof t?function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}(t):t._src})).join("\\/")})).join("|");s="^(?:"+s+")$",this.negate&&(s="^(?!"+s+").*$");try{this.regexp=new RegExp(s,n)}catch(t){this.regexp=!1}return this.regexp},f.match=function(t,e,r){var n=new p(e,r=r||{});return t=t.filter((function(t){return n.match(t)})),n.options.nonull&&!t.length&&t.push(e),t},p.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var r=this.options;"/"!==n.sep&&(t=t.split(n.sep).join("/"));t=t.split(u),this.debug(this.pattern,"split",t);var i,s,o=this.set;for(this.debug(this.pattern,"set",o),s=t.length-1;s>=0&&!(i=t[s]);s--);for(s=0;s<o.length;s++){var a=o[s],c=t;if(r.matchBase&&1===a.length&&(c=[i]),this.matchOne(c,a,e))return!!r.flipNegate||!this.negate}return!r.flipNegate&&this.negate},p.prototype.matchOne=function(t,e,r){var n=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var s=0,o=0,a=t.length,c=e.length;s<a&&o<c;s++,o++){this.debug("matchOne loop");var h,u=e[o],l=t[s];if(this.debug(e,u,l),!1===u)return!1;if(u===i){this.debug("GLOBSTAR",[e,u,l]);var f=s,p=o+1;if(p===c){for(this.debug("** at the end");s<a;s++)if("."===t[s]||".."===t[s]||!n.dot&&"."===t[s].charAt(0))return!1;return!0}for(;f<a;){var d=t[f];if(this.debug("\nglobstar while",t,f,e,p,d),this.matchOne(t.slice(f),e.slice(p),r))return this.debug("globstar found match!",f,a,d),!0;if("."===d||".."===d||!n.dot&&"."===d.charAt(0)){this.debug("dot detected!",t,f,e,p);break}this.debug("globstar swallow a segment, and continue"),f++}return!(!r||(this.debug("\n>>> no match, partial?",t,f,e,p),f!==a))}if("string"==typeof u?(h=n.nocase?l.toLowerCase()===u.toLowerCase():l===u,this.debug("string match",u,l,h)):(h=l.match(u),this.debug("pattern match",u,l,h)),!h)return!1}if(s===a&&o===c)return!0;if(s===a)return r;if(o===c)return s===a-1&&""===t[s];throw new Error("wtf?")}},function(t,e){t.exports=require("util")},function(t,e,r){"use strict";function n(t){return"/"===t.charAt(0)}function i(t){var e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),r=e[1]||"",n=Boolean(r&&":"!==r.charAt(1));return Boolean(e[2]||n)}t.exports="win32"===process.platform?i:n,t.exports.posix=n,t.exports.win32=i},function(t,e,r){t.exports=b;var n=r(1),i=r(6),s=r(2),o=(s.Minimatch,r(16)),a=r(18).EventEmitter,c=r(0),h=r(7),u=r(4),l=r(19),f=r(8),p=(f.alphasort,f.alphasorti,f.setopts),d=f.ownProp,g=r(20),m=(r(3),f.childrenIgnored),v=f.isIgnored,y=r(10);function b(t,e,r){if("function"==typeof e&&(r=e,e={}),e||(e={}),e.sync){if(r)throw new TypeError("callback provided to sync glob");return l(t,e)}return new w(t,e,r)}b.sync=l;var _=b.GlobSync=l.GlobSync;function w(t,e,r){if("function"==typeof e&&(r=e,e=null),e&&e.sync){if(r)throw new TypeError("callback provided to sync glob");return new _(t,e)}if(!(this instanceof w))return new w(t,e,r);p(this,t,e),this._didRealPath=!1;var n=this.minimatch.set.length;this.matches=new Array(n),"function"==typeof r&&(r=y(r),this.on("error",r),this.on("end",(function(t){r(null,t)})));var i=this;if(this._processing=0,this._emitQueue=[],this._processQueue=[],this.paused=!1,this.noprocess)return this;if(0===n)return o();for(var s=0;s<n;s++)this._process(this.minimatch.set[s],s,!1,o);function o(){--i._processing,i._processing<=0&&i._finish()}}b.glob=b,b.hasMagic=function(t,e){var r=function(t,e){if(null===e||"object"!=typeof e)return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t}({},e);r.noprocess=!0;var n=new w(t,r).minimatch.set;if(!t)return!1;if(n.length>1)return!0;for(var i=0;i<n[0].length;i++)if("string"!=typeof n[0][i])return!0;return!1},b.Glob=w,o(w,a),w.prototype._finish=function(){if(h(this instanceof w),!this.aborted){if(this.realpath&&!this._didRealpath)return this._realpath();f.finish(this),this.emit("end",this.found)}},w.prototype._realpath=function(){if(!this._didRealpath){this._didRealpath=!0;var t=this.matches.length;if(0===t)return this._finish();for(var e=this,r=0;r<this.matches.length;r++)this._realpathSet(r,n)}function n(){0==--t&&e._finish()}},w.prototype._realpathSet=function(t,e){var r=this.matches[t];if(!r)return e();var n=Object.keys(r),s=this,o=n.length;if(0===o)return e();var a=this.matches[t]=Object.create(null);n.forEach((function(r,n){r=s._makeAbs(r),i.realpath(r,s.realpathCache,(function(n,i){n?"stat"===n.syscall?a[r]=!0:s.emit("error",n):a[i]=!0,0==--o&&(s.matches[t]=a,e())}))}))},w.prototype._mark=function(t){return f.mark(this,t)},w.prototype._makeAbs=function(t){return f.makeAbs(this,t)},w.prototype.abort=function(){this.aborted=!0,this.emit("abort")},w.prototype.pause=function(){this.paused||(this.paused=!0,this.emit("pause"))},w.prototype.resume=function(){if(this.paused){if(this.emit("resume"),this.paused=!1,this._emitQueue.length){var t=this._emitQueue.slice(0);this._emitQueue.length=0;for(var e=0;e<t.length;e++){var r=t[e];this._emitMatch(r[0],r[1])}}if(this._processQueue.length){var n=this._processQueue.slice(0);this._processQueue.length=0;for(e=0;e<n.length;e++){var i=n[e];this._processing--,this._process(i[0],i[1],i[2],i[3])}}}},w.prototype._process=function(t,e,r,n){if(h(this instanceof w),h("function"==typeof n),!this.aborted)if(this._processing++,this.paused)this._processQueue.push([t,e,r,n]);else{for(var i,o=0;"string"==typeof t[o];)o++;switch(o){case t.length:return void this._processSimple(t.join("/"),e,n);case 0:i=null;break;default:i=t.slice(0,o).join("/")}var a,c=t.slice(o);null===i?a=".":u(i)||u(t.join("/"))?(i&&u(i)||(i="/"+i),a=i):a=i;var l=this._makeAbs(a);if(m(this,a))return n();c[0]===s.GLOBSTAR?this._processGlobStar(i,a,l,c,e,r,n):this._processReaddir(i,a,l,c,e,r,n)}},w.prototype._processReaddir=function(t,e,r,n,i,s,o){var a=this;this._readdir(r,s,(function(c,h){return a._processReaddir2(t,e,r,n,i,s,h,o)}))},w.prototype._processReaddir2=function(t,e,r,n,i,s,o,a){if(!o)return a();for(var h=n[0],u=!!this.minimatch.negate,l=h._glob,f=this.dot||"."===l.charAt(0),p=[],d=0;d<o.length;d++){if("."!==(m=o[d]).charAt(0)||f)(u&&!t?!m.match(h):m.match(h))&&p.push(m)}var g=p.length;if(0===g)return a();if(1===n.length&&!this.mark&&!this.stat){this.matches[i]||(this.matches[i]=Object.create(null));for(d=0;d<g;d++){var m=p[d];t&&(m="/"!==t?t+"/"+m:t+m),"/"!==m.charAt(0)||this.nomount||(m=c.join(this.root,m)),this._emitMatch(i,m)}return a()}n.shift();for(d=0;d<g;d++){m=p[d];t&&(m="/"!==t?t+"/"+m:t+m),this._process([m].concat(n),i,s,a)}a()},w.prototype._emitMatch=function(t,e){if(!this.aborted&&!v(this,e))if(this.paused)this._emitQueue.push([t,e]);else{var r=u(e)?e:this._makeAbs(e);if(this.mark&&(e=this._mark(e)),this.absolute&&(e=r),!this.matches[t][e]){if(this.nodir){var n=this.cache[r];if("DIR"===n||Array.isArray(n))return}this.matches[t][e]=!0;var i=this.statCache[r];i&&this.emit("stat",e,i),this.emit("match",e)}}},w.prototype._readdirInGlobStar=function(t,e){if(!this.aborted){if(this.follow)return this._readdir(t,!1,e);var r=this,i=g("lstat\0"+t,(function(n,i){if(n&&"ENOENT"===n.code)return e();var s=i&&i.isSymbolicLink();r.symlinks[t]=s,s||!i||i.isDirectory()?r._readdir(t,!1,e):(r.cache[t]="FILE",e())}));i&&n.lstat(t,i)}},w.prototype._readdir=function(t,e,r){if(!this.aborted&&(r=g("readdir\0"+t+"\0"+e,r))){if(e&&!d(this.symlinks,t))return this._readdirInGlobStar(t,r);if(d(this.cache,t)){var i=this.cache[t];if(!i||"FILE"===i)return r();if(Array.isArray(i))return r(null,i)}n.readdir(t,function(t,e,r){return function(n,i){n?t._readdirError(e,n,r):t._readdirEntries(e,i,r)}}(this,t,r))}},w.prototype._readdirEntries=function(t,e,r){if(!this.aborted){if(!this.mark&&!this.stat)for(var n=0;n<e.length;n++){var i=e[n];i="/"===t?t+i:t+"/"+i,this.cache[i]=!0}return this.cache[t]=e,r(null,e)}},w.prototype._readdirError=function(t,e,r){if(!this.aborted){switch(e.code){case"ENOTSUP":case"ENOTDIR":var n=this._makeAbs(t);if(this.cache[n]="FILE",n===this.cwdAbs){var i=new Error(e.code+" invalid cwd "+this.cwd);i.path=this.cwd,i.code=e.code,this.emit("error",i),this.abort()}break;case"ENOENT":case"ELOOP":case"ENAMETOOLONG":case"UNKNOWN":this.cache[this._makeAbs(t)]=!1;break;default:this.cache[this._makeAbs(t)]=!1,this.strict&&(this.emit("error",e),this.abort()),this.silent||console.error("glob error",e)}return r()}},w.prototype._processGlobStar=function(t,e,r,n,i,s,o){var a=this;this._readdir(r,s,(function(c,h){a._processGlobStar2(t,e,r,n,i,s,h,o)}))},w.prototype._processGlobStar2=function(t,e,r,n,i,s,o,a){if(!o)return a();var c=n.slice(1),h=t?[t]:[],u=h.concat(c);this._process(u,i,!1,a);var l=this.symlinks[r],f=o.length;if(l&&s)return a();for(var p=0;p<f;p++){if("."!==o[p].charAt(0)||this.dot){var d=h.concat(o[p],c);this._process(d,i,!0,a);var g=h.concat(o[p],n);this._process(g,i,!0,a)}}a()},w.prototype._processSimple=function(t,e,r){var n=this;this._stat(t,(function(i,s){n._processSimple2(t,e,i,s,r)}))},w.prototype._processSimple2=function(t,e,r,n,i){if(this.matches[e]||(this.matches[e]=Object.create(null)),!n)return i();if(t&&u(t)&&!this.nomount){var s=/[\/\\]$/.test(t);"/"===t.charAt(0)?t=c.join(this.root,t):(t=c.resolve(this.root,t),s&&(t+="/"))}"win32"===process.platform&&(t=t.replace(/\\/g,"/")),this._emitMatch(e,t),i()},w.prototype._stat=function(t,e){var r=this._makeAbs(t),i="/"===t.slice(-1);if(t.length>this.maxLength)return e();if(!this.stat&&d(this.cache,r)){var s=this.cache[r];if(Array.isArray(s)&&(s="DIR"),!i||"DIR"===s)return e(null,s);if(i&&"FILE"===s)return e()}var o=this.statCache[r];if(void 0!==o){if(!1===o)return e(null,o);var a=o.isDirectory()?"DIR":"FILE";return i&&"FILE"===a?e():e(null,a,o)}var c=this,h=g("stat\0"+r,(function(i,s){if(s&&s.isSymbolicLink())return n.stat(r,(function(n,i){n?c._stat2(t,r,null,s,e):c._stat2(t,r,n,i,e)}));c._stat2(t,r,i,s,e)}));h&&n.lstat(r,h)},w.prototype._stat2=function(t,e,r,n,i){if(r&&("ENOENT"===r.code||"ENOTDIR"===r.code))return this.statCache[e]=!1,i();var s="/"===t.slice(-1);if(this.statCache[e]=n,"/"===e.slice(-1)&&n&&!n.isDirectory())return i(null,!1,n);var o=!0;return n&&(o=n.isDirectory()?"DIR":"FILE"),this.cache[e]=this.cache[e]||o,s&&"FILE"===o?i():i(null,o,n)}},function(t,e,r){t.exports=u,u.realpath=u,u.sync=l,u.realpathSync=l,u.monkeypatch=function(){n.realpath=u,n.realpathSync=l},u.unmonkeypatch=function(){n.realpath=i,n.realpathSync=s};var n=r(1),i=n.realpath,s=n.realpathSync,o=process.version,a=/^v[0-5]\./.test(o),c=r(12);function h(t){return t&&"realpath"===t.syscall&&("ELOOP"===t.code||"ENOMEM"===t.code||"ENAMETOOLONG"===t.code)}function u(t,e,r){if(a)return i(t,e,r);"function"==typeof e&&(r=e,e=null),i(t,e,(function(n,i){h(n)?c.realpath(t,e,r):r(n,i)}))}function l(t,e){if(a)return s(t,e);try{return s(t,e)}catch(r){if(h(r))return c.realpathSync(t,e);throw r}}},function(t,e){t.exports=require("assert")},function(t,e,r){function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.alphasort=h,e.alphasorti=c,e.setopts=function(t,e,r){r||(r={});if(r.matchBase&&-1===e.indexOf("/")){if(r.noglobstar)throw new Error("base matching requires globstar");e="**/"+e}t.silent=!!r.silent,t.pattern=e,t.strict=!1!==r.strict,t.realpath=!!r.realpath,t.realpathCache=r.realpathCache||Object.create(null),t.follow=!!r.follow,t.dot=!!r.dot,t.mark=!!r.mark,t.nodir=!!r.nodir,t.nodir&&(t.mark=!0);t.sync=!!r.sync,t.nounique=!!r.nounique,t.nonull=!!r.nonull,t.nosort=!!r.nosort,t.nocase=!!r.nocase,t.stat=!!r.stat,t.noprocess=!!r.noprocess,t.absolute=!!r.absolute,t.maxLength=r.maxLength||1/0,t.cache=r.cache||Object.create(null),t.statCache=r.statCache||Object.create(null),t.symlinks=r.symlinks||Object.create(null),function(t,e){t.ignore=e.ignore||[],Array.isArray(t.ignore)||(t.ignore=[t.ignore]);t.ignore.length&&(t.ignore=t.ignore.map(u))}(t,r),t.changedCwd=!1;var s=process.cwd();n(r,"cwd")?(t.cwd=i.resolve(r.cwd),t.changedCwd=t.cwd!==s):t.cwd=s;t.root=r.root||i.resolve(t.cwd,"/"),t.root=i.resolve(t.root),"win32"===process.platform&&(t.root=t.root.replace(/\\/g,"/"));t.cwdAbs=o(t.cwd)?t.cwd:l(t,t.cwd),"win32"===process.platform&&(t.cwdAbs=t.cwdAbs.replace(/\\/g,"/"));t.nomount=!!r.nomount,r.nonegate=!0,r.nocomment=!0,t.minimatch=new a(e,r),t.options=t.minimatch.options},e.ownProp=n,e.makeAbs=l,e.finish=function(t){for(var e=t.nounique,r=e?[]:Object.create(null),n=0,i=t.matches.length;n<i;n++){var s=t.matches[n];if(s&&0!==Object.keys(s).length){var o=Object.keys(s);e?r.push.apply(r,o):o.forEach((function(t){r[t]=!0}))}else if(t.nonull){var a=t.minimatch.globSet[n];e?r.push(a):r[a]=!0}}e||(r=Object.keys(r));t.nosort||(r=r.sort(t.nocase?c:h));if(t.mark){for(n=0;n<r.length;n++)r[n]=t._mark(r[n]);t.nodir&&(r=r.filter((function(e){var r=!/\/$/.test(e),n=t.cache[e]||t.cache[l(t,e)];return r&&n&&(r="DIR"!==n&&!Array.isArray(n)),r})))}t.ignore.length&&(r=r.filter((function(e){return!f(t,e)})));t.found=r},e.mark=function(t,e){var r=l(t,e),n=t.cache[r],i=e;if(n){var s="DIR"===n||Array.isArray(n),o="/"===e.slice(-1);if(s&&!o?i+="/":!s&&o&&(i=i.slice(0,-1)),i!==e){var a=l(t,i);t.statCache[a]=t.statCache[r],t.cache[a]=t.cache[r]}}return i},e.isIgnored=f,e.childrenIgnored=function(t,e){return!!t.ignore.length&&t.ignore.some((function(t){return!(!t.gmatcher||!t.gmatcher.match(e))}))};var i=r(0),s=r(2),o=r(4),a=s.Minimatch;function c(t,e){return t.toLowerCase().localeCompare(e.toLowerCase())}function h(t,e){return t.localeCompare(e)}function u(t){var e=null;if("/**"===t.slice(-3)){var r=t.replace(/(\/\*\*)+$/,"");e=new a(r,{dot:!0})}return{matcher:new a(t,{dot:!0}),gmatcher:e}}function l(t,e){var r=e;return r="/"===e.charAt(0)?i.join(t.root,e):o(e)||""===e?e:t.changedCwd?i.resolve(t.cwd,e):i.resolve(e),"win32"===process.platform&&(r=r.replace(/\\/g,"/")),r}function f(t,e){return!!t.ignore.length&&t.ignore.some((function(t){return t.matcher.match(e)||!(!t.gmatcher||!t.gmatcher.match(e))}))}},function(t,e){t.exports=function t(e,r){if(e&&r)return t(e)(r);if("function"!=typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach((function(t){n[t]=e[t]})),n;function n(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];var n=e.apply(this,t),i=t[t.length-1];return"function"==typeof n&&n!==i&&Object.keys(i).forEach((function(t){n[t]=i[t]})),n}}},function(t,e,r){var n=r(9);function i(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function s(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},r=t.name||"Function wrapped with `once`";return e.onceError=r+" shouldn't be called more than once",e.called=!1,e}t.exports=n(i),t.exports.strict=n(s),i.proto=i((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return i(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return s(this)},configurable:!0})}))},function(t,e,r){t.exports=r(5)},function(t,e,r){var n=r(0),i="win32"===process.platform,s=r(1),o=process.env.NODE_DEBUG&&/fs/.test(process.env.NODE_DEBUG);function a(t){return"function"==typeof t?t:function(){var t;if(o){var e=new Error;t=function(t){t&&(e.message=t.message,r(t=e))}}else t=r;return t;function r(t){if(t){if(process.throwDeprecation)throw t;if(!process.noDeprecation){var e="fs: missing callback "+(t.stack||t.message);process.traceDeprecation?console.trace(e):console.error(e)}}}}()}n.normalize;if(i)var c=/(.*?)(?:[\/\\]+|$)/g;else c=/(.*?)(?:[\/]+|$)/g;if(i)var h=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;else h=/^[\/]*/;e.realpathSync=function(t,e){if(t=n.resolve(t),e&&Object.prototype.hasOwnProperty.call(e,t))return e[t];var r,o,a,u,l=t,f={},p={};function d(){var e=h.exec(t);r=e[0].length,o=e[0],a=e[0],u="",i&&!p[a]&&(s.lstatSync(a),p[a]=!0)}for(d();r<t.length;){c.lastIndex=r;var g=c.exec(t);if(u=o,o+=g[0],a=u+g[1],r=c.lastIndex,!(p[a]||e&&e[a]===a)){var m;if(e&&Object.prototype.hasOwnProperty.call(e,a))m=e[a];else{var v=s.lstatSync(a);if(!v.isSymbolicLink()){p[a]=!0,e&&(e[a]=a);continue}var y=null;if(!i){var b=v.dev.toString(32)+":"+v.ino.toString(32);f.hasOwnProperty(b)&&(y=f[b])}null===y&&(s.statSync(a),y=s.readlinkSync(a)),m=n.resolve(u,y),e&&(e[a]=m),i||(f[b]=y)}t=n.resolve(m,t.slice(r)),d()}}return e&&(e[l]=t),t},e.realpath=function(t,e,r){if("function"!=typeof r&&(r=a(e),e=null),t=n.resolve(t),e&&Object.prototype.hasOwnProperty.call(e,t))return process.nextTick(r.bind(null,null,e[t]));var o,u,l,f,p=t,d={},g={};function m(){var e=h.exec(t);o=e[0].length,u=e[0],l=e[0],f="",i&&!g[l]?s.lstat(l,(function(t){if(t)return r(t);g[l]=!0,v()})):process.nextTick(v)}function v(){if(o>=t.length)return e&&(e[p]=t),r(null,t);c.lastIndex=o;var n=c.exec(t);return f=u,u+=n[0],l=f+n[1],o=c.lastIndex,g[l]||e&&e[l]===l?process.nextTick(v):e&&Object.prototype.hasOwnProperty.call(e,l)?_(e[l]):s.lstat(l,y)}function y(t,n){if(t)return r(t);if(!n.isSymbolicLink())return g[l]=!0,e&&(e[l]=l),process.nextTick(v);if(!i){var o=n.dev.toString(32)+":"+n.ino.toString(32);if(d.hasOwnProperty(o))return b(null,d[o],l)}s.stat(l,(function(t){if(t)return r(t);s.readlink(l,(function(t,e){i||(d[o]=e),b(t,e)}))}))}function b(t,i,s){if(t)return r(t);var o=n.resolve(f,i);e&&(e[s]=o),_(o)}function _(e){t=n.resolve(e,t.slice(o)),m()}m()}},function(t,e,r){var n=r(14),i=r(15);t.exports=function(t){if(!t)return[];"{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2));return v(function(t){return t.split("\\\\").join(s).split("\\{").join(o).split("\\}").join(a).split("\\,").join(c).split("\\.").join(h)}(t),!0).map(l)};var s="\0SLASH"+Math.random()+"\0",o="\0OPEN"+Math.random()+"\0",a="\0CLOSE"+Math.random()+"\0",c="\0COMMA"+Math.random()+"\0",h="\0PERIOD"+Math.random()+"\0";function u(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function l(t){return t.split(s).join("\\").split(o).join("{").split(a).join("}").split(c).join(",").split(h).join(".")}function f(t){if(!t)return[""];var e=[],r=i("{","}",t);if(!r)return t.split(",");var n=r.pre,s=r.body,o=r.post,a=n.split(",");a[a.length-1]+="{"+s+"}";var c=f(o);return o.length&&(a[a.length-1]+=c.shift(),a.push.apply(a,c)),e.push.apply(e,a),e}function p(t){return"{"+t+"}"}function d(t){return/^-?0\d/.test(t)}function g(t,e){return t<=e}function m(t,e){return t>=e}function v(t,e){var r=[],s=i("{","}",t);if(!s||/\$$/.test(s.pre))return[t];var o,c=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),h=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),l=c||h,y=s.body.indexOf(",")>=0;if(!l&&!y)return s.post.match(/,.*\}/)?v(t=s.pre+"{"+s.body+a+s.post):[t];if(l)o=s.body.split(/\.\./);else if(1===(o=f(s.body)).length&&1===(o=v(o[0],!1).map(p)).length)return(w=s.post.length?v(s.post,!1):[""]).map((function(t){return s.pre+o[0]+t}));var b,_=s.pre,w=s.post.length?v(s.post,!1):[""];if(l){var O=u(o[0]),E=u(o[1]),k=Math.max(o[0].length,o[1].length),A=3==o.length?Math.abs(u(o[2])):1,S=g;E<O&&(A*=-1,S=m);var j=o.some(d);b=[];for(var x=O;S(x,E);x+=A){var I;if(h)"\\"===(I=String.fromCharCode(x))&&(I="");else if(I=String(x),j){var L=k-I.length;if(L>0){var R=new Array(L+1).join("0");I=x<0?"-"+R+I.slice(1):R+I}}b.push(I)}}else b=n(o,(function(t){return v(t,!1)}));for(var N=0;N<b.length;N++)for(var T=0;T<w.length;T++){var M=_+b[N]+w[T];(!e||l||M)&&r.push(M)}return r}},function(t,e){t.exports=function(t,e){for(var n=[],i=0;i<t.length;i++){var s=e(t[i],i);r(s)?n.push.apply(n,s):n.push(s)}return n};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";function n(t,e,r){t instanceof RegExp&&(t=i(t,r)),e instanceof RegExp&&(e=i(e,r));var n=s(t,e,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+t.length,n[1]),post:r.slice(n[1]+e.length)}}function i(t,e){var r=e.match(t);return r?r[0]:null}function s(t,e,r){var n,i,s,o,a,c=r.indexOf(t),h=r.indexOf(e,c+1),u=c;if(c>=0&&h>0){for(n=[],s=r.length;u>=0&&!a;)u==c?(n.push(u),c=r.indexOf(t,u+1)):1==n.length?a=[n.pop(),h]:((i=n.pop())<s&&(s=i,o=h),h=r.indexOf(e,u+1)),u=c<h&&c>=0?c:h;n.length&&(a=[s,o])}return a}t.exports=n,n.range=s},function(t,e,r){try{var n=r(3);if("function"!=typeof n.inherits)throw"";t.exports=n.inherits}catch(e){t.exports=r(17)}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},function(t,e){t.exports=require("events")},function(t,e,r){t.exports=d,d.GlobSync=g;var n=r(1),i=r(6),s=r(2),o=(s.Minimatch,r(5).Glob,r(3),r(0)),a=r(7),c=r(4),h=r(8),u=(h.alphasort,h.alphasorti,h.setopts),l=h.ownProp,f=h.childrenIgnored,p=h.isIgnored;function d(t,e){if("function"==typeof e||3===arguments.length)throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");return new g(t,e).found}function g(t,e){if(!t)throw new Error("must provide pattern");if("function"==typeof e||3===arguments.length)throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");if(!(this instanceof g))return new g(t,e);if(u(this,t,e),this.noprocess)return this;var r=this.minimatch.set.length;this.matches=new Array(r);for(var n=0;n<r;n++)this._process(this.minimatch.set[n],n,!1);this._finish()}g.prototype._finish=function(){if(a(this instanceof g),this.realpath){var t=this;this.matches.forEach((function(e,r){var n=t.matches[r]=Object.create(null);for(var s in e)try{s=t._makeAbs(s),n[i.realpathSync(s,t.realpathCache)]=!0}catch(e){if("stat"!==e.syscall)throw e;n[t._makeAbs(s)]=!0}}))}h.finish(this)},g.prototype._process=function(t,e,r){a(this instanceof g);for(var n,i=0;"string"==typeof t[i];)i++;switch(i){case t.length:return void this._processSimple(t.join("/"),e);case 0:n=null;break;default:n=t.slice(0,i).join("/")}var o,h=t.slice(i);null===n?o=".":c(n)||c(t.join("/"))?(n&&c(n)||(n="/"+n),o=n):o=n;var u=this._makeAbs(o);f(this,o)||(h[0]===s.GLOBSTAR?this._processGlobStar(n,o,u,h,e,r):this._processReaddir(n,o,u,h,e,r))},g.prototype._processReaddir=function(t,e,r,n,i,s){var a=this._readdir(r,s);if(a){for(var c=n[0],h=!!this.minimatch.negate,u=c._glob,l=this.dot||"."===u.charAt(0),f=[],p=0;p<a.length;p++){if("."!==(m=a[p]).charAt(0)||l)(h&&!t?!m.match(c):m.match(c))&&f.push(m)}var d=f.length;if(0!==d)if(1!==n.length||this.mark||this.stat){n.shift();for(p=0;p<d;p++){var g;m=f[p];g=t?[t,m]:[m],this._process(g.concat(n),i,s)}}else{this.matches[i]||(this.matches[i]=Object.create(null));for(var p=0;p<d;p++){var m=f[p];t&&(m="/"!==t.slice(-1)?t+"/"+m:t+m),"/"!==m.charAt(0)||this.nomount||(m=o.join(this.root,m)),this._emitMatch(i,m)}}}},g.prototype._emitMatch=function(t,e){if(!p(this,e)){var r=this._makeAbs(e);if(this.mark&&(e=this._mark(e)),this.absolute&&(e=r),!this.matches[t][e]){if(this.nodir){var n=this.cache[r];if("DIR"===n||Array.isArray(n))return}this.matches[t][e]=!0,this.stat&&this._stat(e)}}},g.prototype._readdirInGlobStar=function(t){if(this.follow)return this._readdir(t,!1);var e,r;try{r=n.lstatSync(t)}catch(t){if("ENOENT"===t.code)return null}var i=r&&r.isSymbolicLink();return this.symlinks[t]=i,i||!r||r.isDirectory()?e=this._readdir(t,!1):this.cache[t]="FILE",e},g.prototype._readdir=function(t,e){if(e&&!l(this.symlinks,t))return this._readdirInGlobStar(t);if(l(this.cache,t)){var r=this.cache[t];if(!r||"FILE"===r)return null;if(Array.isArray(r))return r}try{return this._readdirEntries(t,n.readdirSync(t))}catch(e){return this._readdirError(t,e),null}},g.prototype._readdirEntries=function(t,e){if(!this.mark&&!this.stat)for(var r=0;r<e.length;r++){var n=e[r];n="/"===t?t+n:t+"/"+n,this.cache[n]=!0}return this.cache[t]=e,e},g.prototype._readdirError=function(t,e){switch(e.code){case"ENOTSUP":case"ENOTDIR":var r=this._makeAbs(t);if(this.cache[r]="FILE",r===this.cwdAbs){var n=new Error(e.code+" invalid cwd "+this.cwd);throw n.path=this.cwd,n.code=e.code,n}break;case"ENOENT":case"ELOOP":case"ENAMETOOLONG":case"UNKNOWN":this.cache[this._makeAbs(t)]=!1;break;default:if(this.cache[this._makeAbs(t)]=!1,this.strict)throw e;this.silent||console.error("glob error",e)}},g.prototype._processGlobStar=function(t,e,r,n,i,s){var o=this._readdir(r,s);if(o){var a=n.slice(1),c=t?[t]:[],h=c.concat(a);this._process(h,i,!1);var u=o.length;if(!this.symlinks[r]||!s)for(var l=0;l<u;l++){if("."!==o[l].charAt(0)||this.dot){var f=c.concat(o[l],a);this._process(f,i,!0);var p=c.concat(o[l],n);this._process(p,i,!0)}}}},g.prototype._processSimple=function(t,e){var r=this._stat(t);if(this.matches[e]||(this.matches[e]=Object.create(null)),r){if(t&&c(t)&&!this.nomount){var n=/[\/\\]$/.test(t);"/"===t.charAt(0)?t=o.join(this.root,t):(t=o.resolve(this.root,t),n&&(t+="/"))}"win32"===process.platform&&(t=t.replace(/\\/g,"/")),this._emitMatch(e,t)}},g.prototype._stat=function(t){var e=this._makeAbs(t),r="/"===t.slice(-1);if(t.length>this.maxLength)return!1;if(!this.stat&&l(this.cache,e)){var i=this.cache[e];if(Array.isArray(i)&&(i="DIR"),!r||"DIR"===i)return i;if(r&&"FILE"===i)return!1}var s=this.statCache[e];if(!s){var o;try{o=n.lstatSync(e)}catch(t){if(t&&("ENOENT"===t.code||"ENOTDIR"===t.code))return this.statCache[e]=!1,!1}if(o&&o.isSymbolicLink())try{s=n.statSync(e)}catch(t){s=o}else s=o}this.statCache[e]=s;i=!0;return s&&(i=s.isDirectory()?"DIR":"FILE"),this.cache[e]=this.cache[e]||i,(!r||"FILE"!==i)&&i},g.prototype._mark=function(t){return h.mark(this,t)},g.prototype._makeAbs=function(t){return h.makeAbs(this,t)}},function(t,e,r){var n=r(9),i=Object.create(null),s=r(10);function o(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n]=t[n];return r}t.exports=n((function(t,e){return i[t]?(i[t].push(e),null):(i[t]=[e],function(t){return s((function e(){var r=i[t],n=r.length,s=o(arguments);try{for(var a=0;a<n;a++)r[a].apply(null,s)}finally{r.length>n?(r.splice(0,n),process.nextTick((function(){e.apply(null,s)}))):delete i[t]}}))}(t))}))}]));