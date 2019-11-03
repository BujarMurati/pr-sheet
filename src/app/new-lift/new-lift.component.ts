import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-lift',
  templateUrl: './new-lift.component.html',
  styleUrls: ['./new-lift.component.css']
})
export class NewLiftComponent implements OnInit {
  
  today: Date;
  minReps = 1;

  onSubmit(form: NgForm){
    console.log(form);
  }
  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
