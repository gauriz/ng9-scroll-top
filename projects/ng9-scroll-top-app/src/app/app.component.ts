import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor = '#a972cb';
  svgIcon = 'https://img.icons8.com/emoji/24/000000/white-heart.png';
  breakpoints = ['contact', 'menu', 'about'];
}
