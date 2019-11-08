import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrService } from 'src/app/pr.service';
import { PR, PRCollection } from 'src/app/pr';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  @Input() 
  set lift(lift: string){
    this._lift = lift;
    this.getBestPRs();
  }
  get lift(): string {return this._lift}

  private _lift: string;

  bestPRs: PR[];

  @Output() track = new EventEmitter();

  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() { 
    this.getBestPRs();
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
