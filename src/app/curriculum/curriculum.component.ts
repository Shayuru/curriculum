import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DefaultCurriculumInfo } from '../models/default-info';
import { CurriculumService } from '../services/curriculum.service';
import { Router } from '@angular/router';

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

  constructor(
    private _curriculumService: CurriculumService,
    private router: Router
  ) {
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
      this._curriculumService.getCurriculInfo().subscribe(
        (result) => {
          this.curriculumInfo = result;
          this.isReponseReceivedPromise = Promise.resolve(true);
        },
        (error) => {
          this.curriculumInfo = DefaultCurriculumInfo;
          this.errorOccurred = true;
          this.isReponseReceivedPromise = Promise.resolve(true);
          console.log('An error has occurred');
          console.error(<any>error);
        }
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
