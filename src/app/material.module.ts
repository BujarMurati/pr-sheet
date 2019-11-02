import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
    ],
})
export class MaterialModule{

}