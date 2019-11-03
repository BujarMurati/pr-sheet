import { Component, OnInit } from '@angular/core';
import { PrService } from '../pr.service';
import { PR, PRCollection } from '../pr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bestPRs: PR[];

  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() {
    this.prService.read()
      .then(prs =>{
        this.bestPRs = (new PRCollection(prs)).getBestPRsBy('lift');
      })
      .catch(err => console.error(err));
  }

}
