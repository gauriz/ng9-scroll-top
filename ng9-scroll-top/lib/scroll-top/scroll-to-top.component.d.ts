import { OnChanges } from '@angular/core';
import { ViewportScroller } from '@angular/common';
export declare class ScrollToTopComponent implements OnChanges {
    private document;
    private viewportScroller;
    backgroundColor: string;
    color: string;
    height: number;
    width: number;
    lineHeight: number;
    fontSize: number;
    borderRadius: string;
    right: number;
    bottom: number;
    text: string;
    svgIcon: any;
    type: string;
    breakpoints: string[];
    iconVisibility: string;
    windowScrolled: boolean;
    hovered: boolean;
    constructor(document: any, viewportScroller: ViewportScroller);
    ngOnChanges(): void;
    onWindowScroll(): void;
    scrollToTop(index?: any): void;
    hovering(event: any): void;
}
