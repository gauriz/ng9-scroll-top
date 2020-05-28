(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ng9-scroll-top', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory(global['ng9-scroll-top'] = {}, global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ScrollToTopComponent = /** @class */ (function () {
        function ScrollToTopComponent(document, viewportScroller) {
            this.document = document;
            this.viewportScroller = viewportScroller;
            this.backgroundColor = 'purple';
            this.color = 'white';
            this.height = 50;
            this.width = 50;
            this.lineHeight = 55;
            this.fontSize = 30;
            this.borderRadius = '50%';
            this.right = 50;
            this.bottom = 50;
            this.text = '↟';
            this.type = 'pulse';
        }
        ScrollToTopComponent.prototype.ngOnChanges = function () {
            if (this.svgIcon) {
                this.text = '';
            }
        };
        ScrollToTopComponent.prototype.onWindowScroll = function () {
            if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
                this.windowScrolled = true;
            }
            else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
                this.windowScrolled = false;
                this.hovered = false;
            }
        };
        ScrollToTopComponent.prototype.scrollToTop = function (index) {
            if (this.breakpoints && this.breakpoints[index]) {
                this.viewportScroller.scrollToAnchor(this.breakpoints[index]);
                if (document.getElementById('button')) {
                    document.getElementById('button').blur();
                }
            }
            else if (this.breakpoints && this.hovered) {
                (function smoothscroll() {
                    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                    if (currentScroll > 0) {
                        window.requestAnimationFrame(smoothscroll);
                        window.scrollTo(0, currentScroll - (currentScroll / 8));
                    }
                    if (document.getElementById('button')) {
                        document.getElementById('button').blur();
                    }
                })();
            }
            else if (!this.breakpoints) {
                (function smoothscroll() {
                    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                    if (currentScroll > 0) {
                        window.requestAnimationFrame(smoothscroll);
                        window.scrollTo(0, currentScroll - (currentScroll / 8));
                    }
                    if (document.getElementById('button')) {
                        document.getElementById('button').blur();
                    }
                })();
            }
            if (this.breakpoints) {
                this.hovered = true;
            }
        };
        ScrollToTopComponent.prototype.hovering = function (event) {
            this.hovered = true;
        };
        ScrollToTopComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: common.ViewportScroller }
        ]; };
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "backgroundColor", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "lineHeight", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "fontSize", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "borderRadius", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "right", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "bottom", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "svgIcon", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], ScrollToTopComponent.prototype, "breakpoints", void 0);
        __decorate([
            core.HostListener('window:scroll', [])
        ], ScrollToTopComponent.prototype, "onWindowScroll", null);
        ScrollToTopComponent = __decorate([
            core.Component({
                selector: 'ng9-scroll-top',
                template: "<div class=\"fab\" *ngIf='!type' [style.background-color]='backgroundColor' [style.height]='height + \"px\"'\r\n    [style.width]='width + \"px\"' [style.line-height]='lineHeight + \"px\"' [style.font-size]='fontSize + \"px\"'\r\n    [style.border-radius]='borderRadius' [style.color]='color' [style.right]='right  + \"px\"'\r\n    [style.bottom]='bottom + \"px\"' [ngClass]=\"[windowScrolled || hovered? 'show-scrollTop' : '' ]\"\r\n    (click)=\"scrollToTop()\" (click)='hovering($event)'>\r\n    {{text}} <img *ngIf='svgIcon' [src]='svgIcon' />\r\n</div>\r\n\r\n<button *ngIf='type' id='button' class='float'\r\n    [ngClass]=\"[type ? type : '', windowScrolled || hovered? 'show-scrollTop' : '']\"\r\n    [style.border-radius]='borderRadius' [style.height]='height + \"px\"' [style.width]='width + \"px\"'\r\n    [style.right]='right + \"px\"' [style.color]='color' [style.background-color]='backgroundColor'\r\n    [style.bottom]='bottom + \"px\"' (click)=\"scrollToTop();\"> {{text}} <img *ngIf='svgIcon' [src]='svgIcon' />\r\n</button>\r\n\r\n<ng-container *ngIf='hovered'>\r\n\r\n    <div class=\"button_cont\">\r\n        <a class=\"float example_a\" *ngFor='let bp of breakpoints; let index = index;' [style.right]='right + \"px\"'\r\n            [ngClass]=\"[windowScrolled  || hovered? ' show-scrollTop' : '' ]\"\r\n            [style.bottom]=\"bottom +  height + 28 + 'px'\" [style.margin-bottom]='60 * (index +1) + \"px\"'\r\n            [style.background-color]='backgroundColor' [style.color]='color'\r\n            (click)=\"scrollToTop(index);hovered = false\">\r\n            {{bp}}\r\n        </a>\r\n    </div>\r\n\r\n</ng-container>",
                styles: [".fab{box-shadow:0 6px 10px 0 #666;transition:.1s ease-in-out;text-align:center;position:fixed;cursor:pointer;opacity:0;z-index:100}.fab:hover{box-shadow:0 6px 14px 0 #666;transform:scale(1.05);cursor:pointer}.show-scrollTop{opacity:1!important;transition:.1s ease-in-out}.float{box-shadow:0 6px 10px 0 #666;position:fixed;cursor:pointer;opacity:0;z-index:100}.fill:focus,.fill:hover{box-shadow:inset 0 0 0 2em var(--color)}.pulse:focus,.pulse:hover{-webkit-animation:1s pulse;animation:1s pulse;box-shadow:0 0 0 2em rgba(255,255,255,0)}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 var(--color)}}@keyframes pulse{0%{box-shadow:0 0 0 0 var(--color)}}.close:focus,.close:hover{box-shadow:inset -3.5em 0 0 0 var(--color),inset 3.5em 0 0 0 var(--color)}.raise:focus,.raise:hover{box-shadow:0 .5em .5em -.4em var(--color);transform:translateY(-.25em)}.up:focus,.up:hover{box-shadow:inset 0 -3.25em 0 0 var(--color)}.slide:focus,.slide:hover{box-shadow:inset 6.5em 0 0 0 var(--color)}.offset{box-shadow:.3em .3em 0 0 var(--color),inset .3em .3em 0 0 var(--color);--color:#19bc8b}.offset:focus,.offset:hover{box-shadow:0 0 0 0 var(--color),inset 6em 3.5em 0 0 var(--color)}.fill{--color:#a972cb}.pulse{--color:#404040}.close{--color:#ff7f82}.raise{--color:#ffa260}.up{--color:#e4cb58}.slide{--color:#8fc866}button{transition:.25s;background:0 0;border:2px solid;font:inherit}h1{font-weight:400}code{color:#e4cb58;font:inherit}.example_a{text-transform:uppercase;text-decoration:none;padding:6px;display:inline-block;border:none;transition:.4s;width:108px;text-align:center}.example_a:hover{background:#434343;letter-spacing:1px;box-shadow:5px 40px -10px rgba(0,0,0,.57);transition:.4s}"]
            }),
            __param(0, core.Inject(common.DOCUMENT))
        ], ScrollToTopComponent);
        return ScrollToTopComponent;
    }());

    var ScrollToTopModule = /** @class */ (function () {
        function ScrollToTopModule() {
        }
        ScrollToTopModule = __decorate([
            core.NgModule({
                declarations: [ScrollToTopComponent],
                imports: [common.CommonModule, router.RouterModule.forRoot([])],
                exports: [ScrollToTopComponent]
            })
        ], ScrollToTopModule);
        return ScrollToTopModule;
    }());

    exports.ScrollToTopModule = ScrollToTopModule;
    exports.ɵa = ScrollToTopComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng9-scroll-top.umd.js.map
