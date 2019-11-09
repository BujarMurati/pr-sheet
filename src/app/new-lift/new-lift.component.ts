import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lift',
  templateUrl: './new-lift.component.html',
  styleUrls: ['./new-lift.component.css']
})
export class NewLiftComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  onSubmitted(){
    this.router.navigate(['/dashboard'])
  }

  ngOnInit(){

  }

}
