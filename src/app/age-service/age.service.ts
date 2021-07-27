import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor() { }

  getAge() : number {
    return 99;
  }
}
