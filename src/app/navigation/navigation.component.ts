import { Component, OnInit } from '@angular/core';
import { PrService } from '../pr.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  lifts: any[];
  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() {
    this.prService.uniqueLifts().then(lifts => this.lifts = lifts);
  }

}
