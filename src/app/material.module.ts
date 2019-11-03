import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTableModule,
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTableModule,
    ],
})
export class MaterialModule{

}