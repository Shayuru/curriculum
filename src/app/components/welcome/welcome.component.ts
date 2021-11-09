import { Component, OnInit } from '@angular/core';
import { DefaultCurriculumInfo } from '../../models/default-info';
import { CurriculumService } from '../../services/curriculum.service';
import { Router } from '@angular/router';

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

  constructor(
    private _curriculumService: CurriculumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let startTime: Date = new Date();

    this._curriculumService.getCurriculInfo().subscribe(
      async (result) => {
        this.curriculumInfo = result;
        this.navigateToRoute(startTime);
      },
      async (error) => {
        console.error(<any>error);
        this.curriculumInfo = DefaultCurriculumInfo;
        this.errorOccurred = true;
        this.navigateToRoute(startTime);
      }
    );
  }

  async navigateToRoute(startTime: Date) {
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
