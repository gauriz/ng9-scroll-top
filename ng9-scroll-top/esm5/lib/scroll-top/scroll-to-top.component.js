import * as tslib_1 from "tslib";
import { Component, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
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
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ViewportScroller }
    ]; };
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
    return ScrollToTopComponent;
}());
export { ScrollToTopComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLXRvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzktc2Nyb2xsLXRvcC8iLCJzb3VyY2VzIjpbImxpYi9zY3JvbGwtdG9wL3Njcm9sbC10by10b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU83RDtJQW1CRSw4QkFBc0MsUUFBYSxFQUFVLGdCQUFrQztRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCdEYsb0JBQWUsR0FBRyxRQUFRLENBQUM7UUFDM0IsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUVYLFNBQUksR0FBRyxPQUFPLENBQUM7SUFPMkUsQ0FBQztJQUVwRywwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUdELDZDQUFjLEdBQWQ7UUFDRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQzdGLElB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QUU7OERBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3VEQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7d0RBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTtzREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO3lEQUFTO0lBQ1I7UUFBUixLQUFLLEVBQUU7c0RBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7NkRBQXVCO0lBZS9CO1FBREMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7OERBUWpDO0lBbkNVLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGtvREFBNkM7O1NBRTlDLENBQUM7UUFvQmEsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO09BbkJsQixvQkFBb0IsQ0EyRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQTNFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5ULCBWaWV3cG9ydFNjcm9sbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmc5LXNjcm9sbC10b3AnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvVG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3IgPSAncHVycGxlJztcclxuICBASW5wdXQoKSBjb2xvciA9ICd3aGl0ZSc7XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gNTA7XHJcbiAgQElucHV0KCkgd2lkdGggPSA1MDtcclxuICBASW5wdXQoKSBsaW5lSGVpZ2h0ID0gNTU7XHJcbiAgQElucHV0KCkgZm9udFNpemUgPSAzMDtcclxuICBASW5wdXQoKSBib3JkZXJSYWRpdXMgPSAnNTAlJztcclxuICBASW5wdXQoKSByaWdodCA9IDUwO1xyXG4gIEBJbnB1dCgpIGJvdHRvbSA9IDUwO1xyXG4gIEBJbnB1dCgpIHRleHQgPSAn4oafJztcclxuICBASW5wdXQoKSBzdmdJY29uO1xyXG4gIEBJbnB1dCgpIHR5cGUgPSAncHVsc2UnO1xyXG4gIEBJbnB1dCgpIGJyZWFrcG9pbnRzOiBzdHJpbmdbXTtcclxuICAvLyBzdmdJY29uID0gJ2h0dHBzOi8vaW1nLmljb25zOC5jb20vZW1vamkvMjQvMDAwMDAwL3doaXRlLWhlYXJ0LnBuZyc7XHJcbiAgaWNvblZpc2liaWxpdHk6IHN0cmluZztcclxuICB3aW5kb3dTY3JvbGxlZDogYm9vbGVhbjtcclxuICBob3ZlcmVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgdmlld3BvcnRTY3JvbGxlcjogVmlld3BvcnRTY3JvbGxlcikgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuc3ZnSWNvbikge1xyXG4gICAgICB0aGlzLnRleHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnLCBbXSlcclxuICBvbldpbmRvd1Njcm9sbCgpIHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDEwMCkge1xyXG4gICAgICB0aGlzLndpbmRvd1Njcm9sbGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy53aW5kb3dTY3JvbGxlZCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA8IDEwKSB7XHJcbiAgICAgIHRoaXMud2luZG93U2Nyb2xsZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb1RvcChpbmRleD8pIHtcclxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzICYmIHRoaXMuYnJlYWtwb2ludHNbaW5kZXhdKSB7XHJcbiAgICAgIHRoaXMudmlld3BvcnRTY3JvbGxlci5zY3JvbGxUb0FuY2hvcih0aGlzLmJyZWFrcG9pbnRzW2luZGV4XSk7XHJcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykuYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtwb2ludHMgJiYgdGhpcy5ob3ZlcmVkKSB7XHJcbiAgICAgIChmdW5jdGlvbiBzbW9vdGhzY3JvbGwoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aHNjcm9sbCk7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCAtIChjdXJyZW50U2Nyb2xsIC8gOCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkoKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuYnJlYWtwb2ludHMpIHtcclxuICAgICAgKGZ1bmN0aW9uIHNtb290aHNjcm9sbCgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IDApIHtcclxuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3Roc2Nyb2xsKTtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjdXJyZW50U2Nyb2xsIC0gKGN1cnJlbnRTY3JvbGwgLyA4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKS5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMpIHtcclxuICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVyaW5nKGV2ZW50KSB7XHJcbiAgICB0aGlzLmhvdmVyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19