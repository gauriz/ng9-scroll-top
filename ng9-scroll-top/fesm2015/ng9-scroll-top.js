import { __decorate, __param } from 'tslib';
import { Inject, Input, HostListener, Component, NgModule } from '@angular/core';
import { DOCUMENT, ViewportScroller, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

let ScrollToTopComponent = class ScrollToTopComponent {
    constructor(document, viewportScroller) {
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
    ngOnChanges() {
        if (this.svgIcon) {
            this.text = '';
        }
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
            this.hovered = false;
        }
    }
    scrollToTop(index) {
        if (this.breakpoints && this.breakpoints[index]) {
            this.viewportScroller.scrollToAnchor(this.breakpoints[index]);
            if (document.getElementById('button')) {
                document.getElementById('button').blur();
            }
        }
        else if (this.breakpoints && this.hovered) {
            (function smoothscroll() {
                const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
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
                const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
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
    }
    hovering(event) {
        this.hovered = true;
    }
};
ScrollToTopComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ViewportScroller }
];
__decorate([
    Input()
], ScrollToTopComponent.prototype, "backgroundColor", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "color", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "height", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "width", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "lineHeight", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "fontSize", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "borderRadius", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "right", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "bottom", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "text", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "svgIcon", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "type", void 0);
__decorate([
    Input()
], ScrollToTopComponent.prototype, "breakpoints", void 0);
__decorate([
    HostListener('window:scroll', [])
], ScrollToTopComponent.prototype, "onWindowScroll", null);
ScrollToTopComponent = __decorate([
    Component({
        selector: 'ng9-scroll-top',
        template: "<div class=\"fab\" *ngIf='!type' [style.background-color]='backgroundColor' [style.height]='height + \"px\"'\r\n    [style.width]='width + \"px\"' [style.line-height]='lineHeight + \"px\"' [style.font-size]='fontSize + \"px\"'\r\n    [style.border-radius]='borderRadius' [style.color]='color' [style.right]='right  + \"px\"'\r\n    [style.bottom]='bottom + \"px\"' [ngClass]=\"[windowScrolled || hovered? 'show-scrollTop' : '' ]\"\r\n    (click)=\"scrollToTop()\" (click)='hovering($event)'>\r\n    {{text}} <img *ngIf='svgIcon' [src]='svgIcon' />\r\n</div>\r\n\r\n<button *ngIf='type' id='button' class='float'\r\n    [ngClass]=\"[type ? type : '', windowScrolled || hovered? 'show-scrollTop' : '']\"\r\n    [style.border-radius]='borderRadius' [style.height]='height + \"px\"' [style.width]='width + \"px\"'\r\n    [style.right]='right + \"px\"' [style.color]='color' [style.background-color]='backgroundColor'\r\n    [style.bottom]='bottom + \"px\"' (click)=\"scrollToTop();\"> {{text}} <img *ngIf='svgIcon' [src]='svgIcon' />\r\n</button>\r\n\r\n<ng-container *ngIf='hovered'>\r\n\r\n    <div class=\"button_cont\">\r\n        <a class=\"float example_a\" *ngFor='let bp of breakpoints; let index = index;' [style.right]='right + \"px\"'\r\n            [ngClass]=\"[windowScrolled  || hovered? ' show-scrollTop' : '' ]\"\r\n            [style.bottom]=\"bottom +  height + 28 + 'px'\" [style.margin-bottom]='60 * (index +1) + \"px\"'\r\n            [style.background-color]='backgroundColor' [style.color]='color'\r\n            (click)=\"scrollToTop(index);hovered = false\">\r\n            {{bp}}\r\n        </a>\r\n    </div>\r\n\r\n</ng-container>",
        styles: [".fab{box-shadow:0 6px 10px 0 #666;transition:.1s ease-in-out;text-align:center;position:fixed;cursor:pointer;opacity:0;z-index:100}.fab:hover{box-shadow:0 6px 14px 0 #666;transform:scale(1.05);cursor:pointer}.show-scrollTop{opacity:1!important;transition:.1s ease-in-out}.float{box-shadow:0 6px 10px 0 #666;position:fixed;cursor:pointer;opacity:0;z-index:100}.fill:focus,.fill:hover{box-shadow:inset 0 0 0 2em var(--color)}.pulse:focus,.pulse:hover{-webkit-animation:1s pulse;animation:1s pulse;box-shadow:0 0 0 2em rgba(255,255,255,0)}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 var(--color)}}@keyframes pulse{0%{box-shadow:0 0 0 0 var(--color)}}.close:focus,.close:hover{box-shadow:inset -3.5em 0 0 0 var(--color),inset 3.5em 0 0 0 var(--color)}.raise:focus,.raise:hover{box-shadow:0 .5em .5em -.4em var(--color);transform:translateY(-.25em)}.up:focus,.up:hover{box-shadow:inset 0 -3.25em 0 0 var(--color)}.slide:focus,.slide:hover{box-shadow:inset 6.5em 0 0 0 var(--color)}.offset{box-shadow:.3em .3em 0 0 var(--color),inset .3em .3em 0 0 var(--color);--color:#19bc8b}.offset:focus,.offset:hover{box-shadow:0 0 0 0 var(--color),inset 6em 3.5em 0 0 var(--color)}.fill{--color:#a972cb}.pulse{--color:#404040}.close{--color:#ff7f82}.raise{--color:#ffa260}.up{--color:#e4cb58}.slide{--color:#8fc866}button{transition:.25s;background:0 0;border:2px solid;font:inherit}h1{font-weight:400}code{color:#e4cb58;font:inherit}.example_a{text-transform:uppercase;text-decoration:none;padding:6px;display:inline-block;border:none;transition:.4s;width:108px;text-align:center}.example_a:hover{background:#434343;letter-spacing:1px;box-shadow:5px 40px -10px rgba(0,0,0,.57);transition:.4s}"]
    }),
    __param(0, Inject(DOCUMENT))
], ScrollToTopComponent);

let ScrollToTopModule = class ScrollToTopModule {
};
ScrollToTopModule = __decorate([
    NgModule({
        declarations: [ScrollToTopComponent],
        imports: [CommonModule, RouterModule.forRoot([])],
        exports: [ScrollToTopComponent]
    })
], ScrollToTopModule);

/*
 * Public API Surface of scroll-to-top
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ScrollToTopModule, ScrollToTopComponent as ɵa };
//# sourceMappingURL=ng9-scroll-top.js.map
