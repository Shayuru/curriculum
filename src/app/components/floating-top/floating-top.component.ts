import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-top',
  templateUrl: './floating-top.component.html',
  styleUrls: ['./floating-top.component.css'],
})
export class FloatingTopComponent implements OnInit {
  public showScrollTop: boolean = false;

  detectScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.showScrollTop = true;
      if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
        document
          .getElementById('scrollTopAnchor')
          ?.removeAttribute('data-tooltip');
      }
    } else {
      this.showScrollTop = false;
    }
  };
  constructor() {}

  ngOnInit(): void {
    window.onscroll = this.detectScroll;
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
