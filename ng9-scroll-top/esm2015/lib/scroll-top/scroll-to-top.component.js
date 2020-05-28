import * as tslib_1 from "tslib";
import { Component, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
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
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "backgroundColor", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "height", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "width", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "lineHeight", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "fontSize", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "borderRadius", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "right", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "bottom", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "text", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "svgIcon", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input()
], ScrollToTopComponent.prototype, "breakpoints", void 0);
tslib_1.__decorate([
    HostListener('window:scroll', [])
], ScrollToTopComponent.prototype, "onWindowScroll", null);
ScrollToTopComponent = tslib_1.__decorate([
    Component({
        selector: 'ng9-scroll-top',
        template: "<div class=\"fab\" *ngIf='!type' [style.background-color]='backgroundColor' [style.height]='height + \"px\"'\r\n    [style.width]='width + \"px\"' [style.line-height]='lineHeight + \"px\"' [style.font-size]='fontSize + \"px\"'\r\n    [style.border-radius]='borderRadius' [style.color]='color' [style.right]='right  + \"px\"'\r\n    [style.bottom]='bottom + \"px\"' [ngClass]=\"[windowScrolled || hovered? 'show-scrollTop' : '' ]\"\r\n    (click)=\"scrollToTop()\" (click)='hovering($event)'>\r\n    {{text}} <img *ngIf='svgIcon' [src]='svgIcon' />\r\n</div>\r\n\r\n<button *ngIf='type' id='button' class='float'\r\n    [ngClass]=\"[type ? type : '', windowScrolled || hovered? 'show-scrollTop' : '']\"\r\n    [style.border-radius]='borderRadius' [style.height]='height + \"px\"' [style.width]='width + \"px\"'\r\n    [style.right]='right + \"px\"' [style.color]='color' [style.background-color]='backgroundColor'\r\n    [style.bottom]='bottom + \"px\"' (click)=\"scrollToTop();\"> {{text}} <img *ngIf='svgIcon' [src]='svgIcon' />\r\n</button>\r\n\r\n<ng-container *ngIf='hovered'>\r\n\r\n    <div class=\"button_cont\">\r\n        <a class=\"float example_a\" *ngFor='let bp of breakpoints; let index = index;' [style.right]='right + \"px\"'\r\n            [ngClass]=\"[windowScrolled  || hovered? ' show-scrollTop' : '' ]\"\r\n            [style.bottom]=\"bottom +  height + 28 + 'px'\" [style.margin-bottom]='60 * (index +1) + \"px\"'\r\n            [style.background-color]='backgroundColor' [style.color]='color'\r\n            (click)=\"scrollToTop(index);hovered = false\">\r\n            {{bp}}\r\n        </a>\r\n    </div>\r\n\r\n</ng-container>",
        styles: [".fab{box-shadow:0 6px 10px 0 #666;transition:.1s ease-in-out;text-align:center;position:fixed;cursor:pointer;opacity:0;z-index:100}.fab:hover{box-shadow:0 6px 14px 0 #666;transform:scale(1.05);cursor:pointer}.show-scrollTop{opacity:1!important;transition:.1s ease-in-out}.float{box-shadow:0 6px 10px 0 #666;position:fixed;cursor:pointer;opacity:0;z-index:100}.fill:focus,.fill:hover{box-shadow:inset 0 0 0 2em var(--color)}.pulse:focus,.pulse:hover{-webkit-animation:1s pulse;animation:1s pulse;box-shadow:0 0 0 2em rgba(255,255,255,0)}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 var(--color)}}@keyframes pulse{0%{box-shadow:0 0 0 0 var(--color)}}.close:focus,.close:hover{box-shadow:inset -3.5em 0 0 0 var(--color),inset 3.5em 0 0 0 var(--color)}.raise:focus,.raise:hover{box-shadow:0 .5em .5em -.4em var(--color);transform:translateY(-.25em)}.up:focus,.up:hover{box-shadow:inset 0 -3.25em 0 0 var(--color)}.slide:focus,.slide:hover{box-shadow:inset 6.5em 0 0 0 var(--color)}.offset{box-shadow:.3em .3em 0 0 var(--color),inset .3em .3em 0 0 var(--color);--color:#19bc8b}.offset:focus,.offset:hover{box-shadow:0 0 0 0 var(--color),inset 6em 3.5em 0 0 var(--color)}.fill{--color:#a972cb}.pulse{--color:#404040}.close{--color:#ff7f82}.raise{--color:#ffa260}.up{--color:#e4cb58}.slide{--color:#8fc866}button{transition:.25s;background:0 0;border:2px solid;font:inherit}h1{font-weight:400}code{color:#e4cb58;font:inherit}.example_a{text-transform:uppercase;text-decoration:none;padding:6px;display:inline-block;border:none;transition:.4s;width:108px;text-align:center}.example_a:hover{background:#434343;letter-spacing:1px;box-shadow:5px 40px -10px rgba(0,0,0,.57);transition:.4s}"]
    }),
    tslib_1.__param(0, Inject(DOCUMENT))
], ScrollToTopComponent);
export { ScrollToTopComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLXRvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzktc2Nyb2xsLXRvcC8iLCJzb3VyY2VzIjpbImxpYi9zY3JvbGwtdG9wL3Njcm9sbC10by10b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU83RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW1CL0IsWUFBc0MsUUFBYSxFQUFVLGdCQUFrQztRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCdEYsb0JBQWUsR0FBRyxRQUFRLENBQUM7UUFDM0IsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUVYLFNBQUksR0FBRyxPQUFPLENBQUM7SUFPMkUsQ0FBQztJQUVwRyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUdELGNBQWM7UUFDWixJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcs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Q2Q7SUFBUixLQUFLLEVBQUU7MERBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO21EQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7b0RBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTtrREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO3FEQUFTO0FBQ1I7SUFBUixLQUFLLEVBQUU7a0RBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7eURBQXVCO0FBZS9CO0lBREMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7MERBUWpDO0FBbkNVLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLGtvREFBNkM7O0tBRTlDLENBQUM7SUFvQmEsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBbkJsQixvQkFBb0IsQ0EyRWhDO1NBM0VZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQsIFZpZXdwb3J0U2Nyb2xsZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZzktc2Nyb2xsLXRvcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Njcm9sbC10by10b3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Njcm9sbC10by10b3AuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9Ub3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvciA9ICdwdXJwbGUnO1xyXG4gIEBJbnB1dCgpIGNvbG9yID0gJ3doaXRlJztcclxuICBASW5wdXQoKSBoZWlnaHQgPSA1MDtcclxuICBASW5wdXQoKSB3aWR0aCA9IDUwO1xyXG4gIEBJbnB1dCgpIGxpbmVIZWlnaHQgPSA1NTtcclxuICBASW5wdXQoKSBmb250U2l6ZSA9IDMwO1xyXG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gIEBJbnB1dCgpIHJpZ2h0ID0gNTA7XHJcbiAgQElucHV0KCkgYm90dG9tID0gNTA7XHJcbiAgQElucHV0KCkgdGV4dCA9ICfihp8nO1xyXG4gIEBJbnB1dCgpIHN2Z0ljb247XHJcbiAgQElucHV0KCkgdHlwZSA9ICdwdWxzZSc7XHJcbiAgQElucHV0KCkgYnJlYWtwb2ludHM6IHN0cmluZ1tdO1xyXG4gIC8vIHN2Z0ljb24gPSAnaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9lbW9qaS8yNC8wMDAwMDAvd2hpdGUtaGVhcnQucG5nJztcclxuICBpY29uVmlzaWJpbGl0eTogc3RyaW5nO1xyXG4gIHdpbmRvd1Njcm9sbGVkOiBib29sZWFuO1xyXG4gIGhvdmVyZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSwgcHJpdmF0ZSB2aWV3cG9ydFNjcm9sbGVyOiBWaWV3cG9ydFNjcm9sbGVyKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdmdJY29uKSB7XHJcbiAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFtdKVxyXG4gIG9uV2luZG93U2Nyb2xsKCkge1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMTAwKSB7XHJcbiAgICAgIHRoaXMud2luZG93U2Nyb2xsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLndpbmRvd1Njcm9sbGVkICYmIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIDwgMTApIHtcclxuICAgICAgdGhpcy53aW5kb3dTY3JvbGxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvVG9wKGluZGV4Pykge1xyXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMgJiYgdGhpcy5icmVha3BvaW50c1tpbmRleF0pIHtcclxuICAgICAgdGhpcy52aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvQW5jaG9yKHRoaXMuYnJlYWtwb2ludHNbaW5kZXhdKTtcclxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKS5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5icmVha3BvaW50cyAmJiB0aGlzLmhvdmVyZWQpIHtcclxuICAgICAgKGZ1bmN0aW9uIHNtb290aHNjcm9sbCgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IDApIHtcclxuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3Roc2Nyb2xsKTtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjdXJyZW50U2Nyb2xsIC0gKGN1cnJlbnRTY3JvbGwgLyA4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKS5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5icmVha3BvaW50cykge1xyXG4gICAgICAoZnVuY3Rpb24gc21vb3Roc2Nyb2xsKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGhzY3JvbGwpO1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGN1cnJlbnRTY3JvbGwgLSAoY3VycmVudFNjcm9sbCAvIDgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5icmVha3BvaW50cykge1xyXG4gICAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaG92ZXJpbmcoZXZlbnQpIHtcclxuICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=