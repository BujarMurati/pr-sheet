import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  show(msg: string, action: string): MatSnackBarRef<SimpleSnackBar>{
    return this._snackBar.open(msg, action, {duration: 2000})
  }

}
