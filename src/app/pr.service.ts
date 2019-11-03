import { Injectable } from '@angular/core';
import { PR } from './pr';
import { DB } from './db';

@Injectable({
  providedIn: 'root'
})
export class PrService {

  db: DB;

  constructor() { 
    this.init();
  }

  init(){
    this.db = new DB();
  }
  create(pr: PR): void {
    this.db.prs.add(pr);
  }

  read(filterBy?: Partial<PR>): Promise<PR[]>{
    if (filterBy){
      return this.db.prs
        .filter(pr => Object.keys(filterBy).every(criterion => pr[criterion] === filterBy[criterion]))
        .toArray();
    }
    return this.db.prs.toArray();
  }


}
