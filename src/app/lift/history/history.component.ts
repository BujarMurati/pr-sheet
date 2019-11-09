import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PR, PRCollection } from 'src/app/pr';
import { PrService } from 'src/app/pr.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() 
  set lift(lift: string){
    this._lift = lift;
    this.title = `All ${this._lift} PRs`
    this.getAllPRs();
  }
  get lift(): string {return this._lift}

  private _lift: string;

  allPRs: PR[];
  title: string;

  @Output() track = new EventEmitter();

  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() {
    this.getAllPRs();
  }

  getAllPRs(): void{
    this.prService.read({lift:this._lift})
    .then(prs => {
      this.allPRs = prs;
      this.allPRs.sort(function(a, b){
        if (a.date > b.date){
          return 1;
        }else if (a.date === b.date){
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
