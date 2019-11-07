import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


enum Tabs{
  BEST = 0,
  TRACK = 1,
  HISTORY = 2
}

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})

export class LiftComponent implements OnInit {
  tabs = Tabs;
  lift: string;
  activeTab: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.lift=params['lift']);
    this.activeTab = 0;
  }
  
  setActiveTab(tab: Tabs): void{
    this.activeTab = tab;
    this.lift = this.lift;
  }

}
