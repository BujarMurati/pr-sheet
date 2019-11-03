import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-lift',
  templateUrl: './new-lift.component.html',
  styleUrls: ['./new-lift.component.css']
})
export class NewLiftComponent implements OnInit {
  today: Date;
  minReps = 1;
  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
