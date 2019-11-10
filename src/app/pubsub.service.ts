import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PR } from './pr';

@Injectable()
export class PubsubService {
  newPR = new Subject<PR>();

  constructor() { }

  publishPR(pr: PR): void{
    this.newPR.next(pr);
  }

}
