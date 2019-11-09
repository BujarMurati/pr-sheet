import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LiftComponent } from './lift/lift.component';
import { BestComponent } from './lift/best/best.component';
import { HistoryComponent } from './lift/history/history.component';
import { TrackComponent } from './lift/track/track.component';
import { NewLiftComponent } from './new-lift/new-lift.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    DashboardComponent,
    LiftComponent,
    BestComponent,
    HistoryComponent,
    TrackComponent,
    NewLiftComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
