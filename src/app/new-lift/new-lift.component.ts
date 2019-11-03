import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrService } from '../pr.service';
import { PR } from '../pr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lift',
  templateUrl: './new-lift.component.html',
  styleUrls: ['./new-lift.component.css']
})
export class NewLiftComponent implements OnInit {
  date: Date;
  today: Date;
  minReps = 1;

  constructor(
    private prService: PrService,
    private router: Router,
  ) { }

  onSubmit(form: NgForm){
    let pr = form.value;
    pr.e1RM = PR.calculateE1RM(pr.reps, pr.weight);
    this.prService.createPR(pr);
    this.router.navigate(['/prs/'+pr.lift])
  }

  ngOnInit() {
    this.today = new Date();
    this.date = this.today;
    
  }

}
