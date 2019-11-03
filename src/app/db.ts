import Dexie from 'dexie';
import { PR } from './pr';

export class DB extends Dexie{
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