import { CurriculumService } from '../services/curriculum.service';
import { getDefaultInfo } from './common.utils';

export class CurriculumServiceResponse {
  curriculumInfo: any;
  errorOccurred: boolean = false;
}

export function getCurriculumServiceResponse(
  _curriculumService: CurriculumService,
  localeId: string,
  responseServiceCallback: (response: CurriculumServiceResponse) => void
) {
  const curriculumResponse: CurriculumServiceResponse =
    new CurriculumServiceResponse();

  _curriculumService.getCurriculInfo().subscribe(
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
