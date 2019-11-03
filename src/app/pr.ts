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

    getUniqueLifts(): string[]{
        let lifts = [];
        this.prs.forEach(pr => {
          if (!lifts.includes(pr.lift)){
            lifts.push(pr.lift)
          }
        });
        return lifts;
    }
    getBestPRs():PR[]{
        let bestPRs = [];
        this.getUniqueLifts().forEach(lift => {
          let liftPRs = this.prs.filter(pr => pr.lift === lift);
          let max = 0;
          let bestPR: PR;
          for (let pr of liftPRs){
            if (pr.e1RM > max){
              max = pr.e1RM;
              bestPR = pr;
            }
          }
          bestPRs.push(bestPR);
        });
        return bestPRs;
      }

    
}