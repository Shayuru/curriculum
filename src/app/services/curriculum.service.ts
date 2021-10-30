import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { utils } from '../../environments/utils';

@Injectable()
export class CurriculumService {
  headers: HttpHeaders = new HttpHeaders().set('x-api-key', utils.apiKey);

  params = new HttpParams().set('id', 1).set('lang', 'en');
  public apiPath: string = '/prod/v1/curriculum';

  constructor(public _httpClient: HttpClient) {}

  getCurriculInfo(): Observable<any> {
    let url = environment.apisBaseUrl.concat(this.apiPath);
    return this._httpClient.get(url, {
      headers: this.headers,
      params: this.params,
    });
  }
}
