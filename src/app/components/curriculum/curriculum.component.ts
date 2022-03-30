import { Component, Inject, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { Router, ActivatedRoute } from '@angular/router';
import { getlocalStorageLanguage } from '../../utils/common.utils';
import { TranslateService } from '@ngx-translate/core';
import {
  CurriculumServiceResponse,
  getCurriculumServiceResponse,
  getReplayValue,
} from '../../utils/service-utils';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
  providers: [CurriculumService],
})
export class CurriculumComponent implements OnInit {
  public curriculumInfo: any = null;
  public errorOccurred: boolean = false;
  public isReponseReceivedPromise!: Promise<boolean>;
  private routeState: any;
  private localeId: string;
  private replay: boolean = true;

  constructor(
    private _curriculumService: CurriculumService,
    private router: Router,
    private _translate: TranslateService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.localeId = getlocalStorageLanguage();
    this._translate.use(this.localeId);
    let replayValue: string = getReplayValue(route);

    this.replay = replayValue == 'false' ? false : true;

    if (router?.getCurrentNavigation()?.extras.state) {
      this.routeState = router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.curriculumInfo = this.routeState.curriculumInfo
          ? JSON.parse(this.routeState.curriculumInfo)
          : null;
        this.errorOccurred = this.routeState.errorOccurred;
      }
    }
  }

  ngOnInit(): void {
    if (this.curriculumInfo == null) {
      const responseServiceCallback = (response: CurriculumServiceResponse) => {
        this.curriculumInfo = response.curriculumInfo;
        this.errorOccurred = response.errorOccurred;
        this.isReponseReceivedPromise = Promise.resolve(true);
        this.changeDocumentLanguage();
      };

      getCurriculumServiceResponse(
        this._curriculumService,
        this.localeId,
        responseServiceCallback,
        this.replay
      );
    } else {
      this.isReponseReceivedPromise = Promise.resolve(true);
    }
  }

  removeNotification(target: any) {
    let parentNode = target.parentNode as HTMLElement;
    parentNode.removeChild(target);
  }

  changeDocumentLanguage() {
    //Default
    let langKey: string = 'en';
    if (this.localeId == 'es-MX') {
      langKey = 'es';
    }
    this.document.documentElement.lang = langKey;
  }
}
