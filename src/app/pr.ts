export class PR {
    lift: string;
    weight: number;
    reps: number;
    e1RM: number; //estimated 1 rep max
    date: Date;


    static calculateE1RM(reps: number, weight: number): number {
        if (reps === 1){
            return weight;
        }        
        return (1+reps/30)*weight;
    }
}

export class PRCollection {
    prs: PR[];

    constructor(prs: PR[]){
        this.prs = prs;
    }

    getBestPRsBy(field: string):PR[]{
      let bestPRs: PR[] = [];
      this.getUniqueValuesBy(field).forEach(val => {
        let filteredPRs = this.prs.filter(pr => pr[field] === val);
        bestPRs.push(this.max(filteredPRs));
      });
      return bestPRs;
    }

    getUniqueValuesBy(field: string): string[]{
      let vals = [];
      this.prs.forEach(pr=> {
        if (!vals.includes(pr[field])){
          vals.push(pr[field]);
        }
      });
      return vals;
    }

    

  private max(prs: PR[]) {
    let max = 0;
    let maxPR: PR;
    for (let pr of prs) {
      if (pr.e1RM > max) {
        max = pr.e1RM;
        maxPR = pr;
      }
    }
    return maxPR;
  }
}