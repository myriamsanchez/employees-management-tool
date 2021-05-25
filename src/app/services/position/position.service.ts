import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  baseUrl: string = 'api/positions';
  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders();
  }

  getPositionList(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
