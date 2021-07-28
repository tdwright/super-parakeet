import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  public url = 'https://api.agify.io/?';

  constructor(public http: HttpClient) { }

  getAge() : number {
    return 99;
  }

  getAgeApi(name: string): Observable<any> {
    return this.http.get(`${this.url}name=${name}`);
  }


}
