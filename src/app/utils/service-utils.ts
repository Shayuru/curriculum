import { Observable } from 'rxjs';
import { CurriculumService } from '../services/curriculum.service';
import { getDefaultInfo } from './common.utils';
import { shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
class ObservableInstance {
  observableService: Observable<any> | undefined;

  getInstace(_curriculumService: CurriculumService): Observable<any> {
    if (!this.observableService) {
      this.observableService = _curriculumService
        .getCurriculInfo()
        .pipe(shareReplay(1));
    }

    return this.observableService;
  }
}
class ObservableFactory {
  instanceEs: ObservableInstance = new ObservableInstance();
  instanceEn: ObservableInstance = new ObservableInstance();

  constructor() {}
  getObservable(
    _curriculumService: CurriculumService,
    localeId: string
  ): Observable<any> {
    if (localeId == 'es-MX') {
      return this.instanceEs.getInstace(_curriculumService);
    }
    //Default
    return this.instanceEn.getInstace(_curriculumService);
  }
}

var factory: ObservableFactory = new ObservableFactory();
export class CurriculumServiceResponse {
  curriculumInfo: any;
  errorOccurred: boolean = false;
}

export function getCurriculumServiceResponse(
  _curriculumService: CurriculumService,
  localeId: string,
  responseServiceCallback: (response: CurriculumServiceResponse) => void,
  replay: boolean = true
) {
  const curriculumResponse: CurriculumServiceResponse =
    new CurriculumServiceResponse();

  let observableService = replay
    ? factory.getObservable(_curriculumService, localeId)
    : _curriculumService.getCurriculInfo();

  observableService.subscribe(
    (result) => {
      curriculumResponse.curriculumInfo = result;
      responseServiceCallback(curriculumResponse);
    },
    (error) => {
      curriculumResponse.curriculumInfo = getDefaultInfo(localeId);
      curriculumResponse.errorOccurred = true;
      console.log('An error has occurred');
      console.error(<any>error);
      responseServiceCallback(curriculumResponse);
    }
  );
}

export function getReplayValue(route: ActivatedRoute): string {
  return route.snapshot.queryParamMap.get('replay') || '';
}
