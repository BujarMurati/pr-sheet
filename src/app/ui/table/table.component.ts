import { Component, OnInit, Input } from '@angular/core';
import { PR } from '../../pr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string;
  @Input() prs: PR[];
  @Input() columns: string[]; //['lift', 'reps', 'weight', 'e1RM', 'date']
  constructor() { }

  ngOnInit() {
  }

}
