import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { PR, PRCollection } from './pr';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class DB extends Dexie{
  prs: Dexie.Table<PR, number>
  constructor () {
    super("PR Database");
    this.version(1).stores({
      prs: '++id, lift, weight, reps, date'
    });
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.prs = this.table('prs');
    this.prs.mapToClass(PR);
  }
}

export class CrudService {
  db: DB;

  constructor() { 
    this.db = new DB();
  }

  create(pr: PR):void{
    this.db.prs.add(pr);
  }

  read(){

  }
  update(){

  }
  delete(){

  }
}
