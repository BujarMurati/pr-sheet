import { Component, OnInit } from '@angular/core';
import { PrService } from '../pr.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  newLiftMessage: string;
  empty: boolean;

  constructor(
    private prService: PrService,
  ) { }

  ngOnInit() {
    this.prService.isEmpty().then(empty => {
        this.empty = empty;
        if (empty){
          this.newLiftMessage = 'Get started'
        }else{
          this.newLiftMessage = 'Start tracking a new lift'
        }
      }
    )
  }

}
