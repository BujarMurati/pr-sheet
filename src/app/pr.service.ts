import { Injectable } from '@angular/core';
import { PR, PRCollection } from './pr';
import { Observable, of } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PrService {

  prs: PR[];

  constructor(private crud: CrudService) { }

  ngOnInit(){

  }

  getPRCollection(filterBy: Partial<PR> = {}): Observable<PRCollection> {
    return of(new PRCollection(
      this.prs.filter(pr => Object.keys(filterBy).every(criterion => pr[criterion] === filterBy[criterion])))
    );
  }

  getPRs(filterBy: Partial<PR> = {}): Observable<PR[]> {
    return of(this.prs.filter(pr => Object.keys(filterBy).every(criterion => pr[criterion] === filterBy[criterion])));
  }

  createPR(pr: PR) {
    this.crud.create(pr);
  }
}
