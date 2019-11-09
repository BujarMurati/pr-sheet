import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @Input() 
  set lift(lift: string){
    this._lift = lift;
    this.title = `Enter a new ${this.lift} PR`
  }
  get lift(): string{
    return this._lift;
  }

  title: string;
  @Output() submitted = new EventEmitter();

  private _lift: string;


  constructor() { }

  ngOnInit() {
  }

  onSubmitted(){
    this.submitted.emit()
  }
}
