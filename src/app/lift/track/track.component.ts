import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrService } from 'src/app/pr.service';
import { PR } from 'src/app/pr';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @Input() 
  set lift(lift: string){
    this._lift = lift;
  }
  get name(): string {return this._lift}

  private _lift: string;

  @Output() submitted = new EventEmitter();

  date: Date;
  today: Date;

  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.date = this.today;
  }
  onSubmit(form: NgForm){
    let pr = form.value;
    pr.e1RM = PR.calculateE1RM(pr.reps, pr.weight);
    pr.lift = this._lift;
    this.prService.create(pr);
    this.submitted.emit();
  }

}
