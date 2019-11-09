import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PrService } from '../pr.service';
import { NgForm } from '@angular/forms';
import { PR } from '../pr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() lift: string;
  @Input() showLiftField: boolean;

  @Output() submitted = new EventEmitter();

  date: Date;
  today: Date;
  minReps = 1;
  e1RM = 0;

  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.date = this.today;
  }

  onSubmit(form: NgForm){
    let pr = form.value;
    pr.e1RM = this.e1RM;
    if (this.lift){
      pr.lift = this.lift;
    }
    this.prService.create(pr);
    this.submitted.emit();
  }

  onCalculateE1RM(reps: number, weight: number){
    this.e1RM = weight ? PR.calculateE1RM(reps, weight) : 0;
  }

}
