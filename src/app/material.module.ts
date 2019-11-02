import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
    ],
})
export class MaterialModule{

}