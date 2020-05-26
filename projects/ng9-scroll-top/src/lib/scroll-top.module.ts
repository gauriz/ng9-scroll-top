import { NgModule } from '@angular/core';
import { ScrollToTopComponent } from './scroll-top/scroll-to-top.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScrollToTopComponent],
  imports: [CommonModule,  RouterModule.forRoot([])],
  exports: [ScrollToTopComponent]
})
export class ScrollToTopModule { }
