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
    
  }

  ngOnInit(){
    this.db = new DB();
  }
  create(pr: PR) {
    this.db.prs.add(pr);
  }
}
