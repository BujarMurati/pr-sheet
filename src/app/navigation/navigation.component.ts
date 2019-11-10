import { Component, OnInit } from '@angular/core';
import { PrService } from '../pr.service';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  lifts: any[];
  constructor(
    private prService: PrService,
    private pubsub: PubsubService,
  ) { }

  ngOnInit() {
    this.updateLifts();
    this.pubsub.newPR.subscribe(pr => this.updateLifts());
  }

  private updateLifts() {
    this.prService.uniqueLifts().then(lifts => this.lifts = lifts);
  }
}
