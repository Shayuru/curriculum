import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getlocalStorageLanguage } from 'src/app/utils/common.utils';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private _translate: TranslateService) {
    this._translate.use(getlocalStorageLanguage());
  }

  ngOnInit(): void {}
}
