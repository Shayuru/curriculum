import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getReplayValue } from 'src/app/utils/service-utils';
import {
  getlocalStorageLanguage,
  saveLocalStorageLanguage,
} from '../../utils/common.utils';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  menuBurgerCurriculumId: string = 'menuBurgerCurriculum';
  navbarCurriculumId: string = 'navbarCurriculum';
  replayValue: string = '';

  documentClickHandler = (_event: any) => {
    if (
      _event.target.id == this.menuBurgerCurriculumId ||
      !this.isBurgerActivated()
    ) {
      return;
    }
    this.togleMenuBurgerIfActivated();
  };

  constructor(
    private scroller: ViewportScroller,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.replayValue = getReplayValue(route);
  }

  ngOnInit(): void {}

  scrollTo(target: string) {
    this.togleMenuBurgerIfActivated();
    this.scroller.scrollToAnchor(target);
  }

  changeLanguage(lang: string) {
    if (getlocalStorageLanguage() == lang) return;
    saveLocalStorageLanguage(lang);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    if (this.replayValue != '' && this.replayValue.trim().length <= 5) {
      this.router.navigate(['/curriculum'], {
        queryParams: { replay: this.replayValue },
      });
    } else {
      this.router.navigate(['/curriculum']);
    }
  }

  togleMenuBurger(menuBurger: HTMLElement) {
    const target: string = menuBurger.dataset.target || '';
    if (target != '') {
      const $target = document.getElementById(target) as HTMLElement;
      menuBurger.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      this.addDocumentClicListenr(menuBurger);
    }
  }

  togleMenuBurgerIfActivated() {
    if (this.isBurgerActivated()) {
      const menuBurger = document.getElementById(
        this.menuBurgerCurriculumId
      ) as HTMLElement;
      this.togleMenuBurger(menuBurger);
    }
  }

  isBurgerActivated(): boolean {
    return (
      (document
        .getElementById(this.menuBurgerCurriculumId)
        ?.classList.contains('is-active') ||
        false) &&
      (document
        .getElementById(this.navbarCurriculumId)
        ?.classList.contains('is-active') ||
        false)
    );
  }

  addDocumentClicListenr(menuBurger: HTMLElement) {
    if (menuBurger.classList.contains('is-active')) {
      document.addEventListener('click', this.documentClickHandler, true);
      return;
    }
    document.removeEventListener('click', this.documentClickHandler);
  }
}
