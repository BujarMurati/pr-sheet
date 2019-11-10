import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PR } from './pr';

@Injectable()
export class PubsubService {
  newPR = new Subject<PR>();
  newLift = new Subject<string>();

  constructor() { }

  publishPR(pr: PR): void{
    this.newPR.next(pr);
  }
  publishLift(lift: string): void{
    this.newLift.next(lift);
  }

}
