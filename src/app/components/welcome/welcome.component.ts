import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  getDefaultInfo,
  getlocalStorageLanguage,
} from '../../utils/common.utils';

const sleepTime: number = 6000;

const delay = (miliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};

const delayIfNeeded = async (startTime: Date) => {
  let miliseconds: number = new Date().getTime() - startTime.getTime();
  await delay(sleepTime - miliseconds);
};

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [CurriculumService],
})
export class WelcomeComponent implements OnInit {
  public curriculumInfo: any;
  public errorOccurred: boolean = false;
  private localeId: string;

  constructor(
    private _curriculumService: CurriculumService,
    private router: Router,
    private _translate: TranslateService
  ) {
    this.localeId = getlocalStorageLanguage(localStorage);
    this._translate.use(this.localeId);
  }

  ngOnInit(): void {
    let startTime: Date = new Date();

    this._curriculumService.getCurriculInfo().subscribe(
      (result) => {
        this.curriculumInfo = result;
        this.navigateToRoute(startTime);
      },
      (error) => {
        console.error(<any>error);
        this.curriculumInfo = getDefaultInfo(this.localeId);
        this.errorOccurred = true;
        this.navigateToRoute(startTime);
      }
    );
  }

  navigateToRoute(startTime: Date) {
    delayIfNeeded(startTime).then(() => {
      this.router.navigate(['/curriculum'], {
        state: {
          curriculumInfo: JSON.stringify(this.curriculumInfo),
          errorOccurred: this.errorOccurred,
        },
      });
    });
  }
}
