import { Component, OnInit } from '@angular/core';
import { PrService } from 'src/app/pr.service';
import { ActivatedRoute } from '@angular/router';
import { PR, PRCollection } from 'src/app/pr';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  lift: string;
  bestPRs: PR[];
  constructor(
    private prService: PrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.lift = this.route.snapshot.paramMap.get('lift');
    this.prService.read({lift:this.lift})
      .then(prs => {
        this.bestPRs = (new PRCollection(prs)).getBestPRsBy('reps');
        
      })
      .catch(err => console.error(err));
  }

}
