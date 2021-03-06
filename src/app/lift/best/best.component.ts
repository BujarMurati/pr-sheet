import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrService } from 'src/app/pr.service';
import { PR, PRCollection } from 'src/app/pr';
import { PubsubService } from 'src/app/pubsub.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  @Input() 
  set lift(lift: string){
    this._lift = lift;
    this.title = `Your lifetime ${this._lift} PRs`
    this.getBestPRs();
  }
  get lift(): string {return this._lift}

  private _lift: string;

  bestPRs: PR[];
  title: string;

  @Output() track = new EventEmitter();

  constructor(
    private prService: PrService,
    private pubsub: PubsubService,
  ) { }

  ngOnInit() { 
    this.getBestPRs();
    this.pubsub.newPR.subscribe(pr => {
      this.getBestPRs();
    })
  }

  getBestPRs(): void{
    this.prService.read({lift:this._lift})
    .then(prs => {
      this.bestPRs = (new PRCollection(prs)).getBestPRsBy('reps');
      this.bestPRs.sort(function(a, b){
        if (a.reps > b.reps){
          return 1;
        }else if (a.reps === b.reps){
          return 0;
        }else{
          return -1;
        }
      });
      
    })
    .catch(err => console.error(err));

  }

  onOpenTrackForm(){
    this.track.emit();
  }

}
