import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { Router } from '@angular/router';
import { getlocalStorageLanguage } from '../../utils/common.utils';
import { TranslateService } from '@ngx-translate/core';
import {
  CurriculumServiceResponse,
  getCurriculumServiceResponse,
} from '../../utils/service-utils';

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

  constructor(
    private _curriculumService: CurriculumService,
    private router: Router,
    private _translate: TranslateService
  ) {
    this.localeId = getlocalStorageLanguage();
    this._translate.use(this.localeId);

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
      };

      getCurriculumServiceResponse(
        this._curriculumService,
        this.localeId,
        responseServiceCallback
      );
    } else {
      this.isReponseReceivedPromise = Promise.resolve(true);
    }
  }

  removeNotification(target: any) {
    let parentNode = target.parentNode as HTMLElement;
    parentNode.removeChild(target);
  }
}
