import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgifyResponse } from './agify-response';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor(private http: HttpClient) { }

  private apiUrl : string = 'https://api.agify.io/';

  getAge(name:string) : Observable<number> {
    const params = { 'name': name };
    var response = this.http.get<AgifyResponse>(this.apiUrl, { params: params })
    return response.pipe(pluck('age'));
  }
}
