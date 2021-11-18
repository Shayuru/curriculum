import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveLocalStorageLanguage } from '../../utils/common.utils';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(): void {}

  scrollTo(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  changeLanguage(lang: string) {
    saveLocalStorageLanguage(localStorage, lang);
    //TODO This is the easiest way (reload path), verify other options (eg. update curriculumInfo in curriculum component)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/curriculum']);
  }
  togleMenuBurger(menuBurger: HTMLElement) {
    const target: string = menuBurger.dataset.target || '';
    if (target != '') {
      const $target = document.getElementById(target) as HTMLElement;
      menuBurger.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    }
  }
}
