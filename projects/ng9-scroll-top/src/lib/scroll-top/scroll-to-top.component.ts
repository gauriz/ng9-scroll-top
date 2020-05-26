import { Component, HostListener, Inject, Input, OnChanges } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'ng9-scroll-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnChanges {
  @Input() backgroundColor = 'purple';
  @Input() color = 'white';
  @Input() height = 50;
  @Input() width = 50;
  @Input() lineHeight = 55;
  @Input() fontSize = 30;
  @Input() borderRadius = '50%';
  @Input() right = 50;
  @Input() bottom = 50;
  @Input() text = '↟';
  @Input() svgIcon;
  @Input() type = 'pulse';
  @Input() breakpoints: string[];
  // svgIcon = 'https://img.icons8.com/emoji/24/000000/white-heart.png';
  iconVisibility: string;
  windowScrolled: boolean;
  hovered: boolean;

  constructor(@Inject(DOCUMENT) private document: any, private viewportScroller: ViewportScroller) { }

  ngOnChanges() {
    if (this.svgIcon) {
      this.text = '';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop(index) {
    if (this.breakpoints && this.breakpoints[index]) {
      this.viewportScroller.scrollToAnchor(this.breakpoints[index]);
      if (document.getElementById('button')) {
        document.getElementById('button').blur();
      }
    } else if (this.breakpoints) {
      this.hovered = true;
    } else {
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
  }

  hovering(event) {
    console.log(event);
    this.hovered = true
  }

}
