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
    ],
})
export class MaterialModule{

}