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
    ],
})
export class MaterialModule{

}