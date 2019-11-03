import { Injectable } from '@angular/core';
import { PR, PRCollection } from './pr';
import { DB } from './db';
import { Observable, from} from 'rxjs';





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
}
