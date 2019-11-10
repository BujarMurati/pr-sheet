import { Injectable } from '@angular/core';
import { PR } from './pr';
import { DB } from './db';
import { PubsubService } from './pubsub.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PrService {

  db: DB;

  constructor(
    private pubsub: PubsubService,
    private messageService: MessageService,
  ) { 
    this.init();
  }

  init(){
    this.db = new DB();
  }

  isEmpty(): Promise<boolean>{
    return this.db.prs.count(c=>{
      return c===0;
    });
  }

  uniqueLifts():Promise<any[]>{
    return this.db.prs.where('lift').notEqual('').uniqueKeys();
  }

  create(pr: PR): void {
    this.db.prs.add(pr);
    this.pubsub.publishPR(pr);
    this.messageService.show('PR saved!', 'OK');
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
