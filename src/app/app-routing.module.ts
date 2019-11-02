import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LiftComponent } from './lift/lift.component';
import { BestComponent } from './lift/best/best.component';
import { HistoryComponent } from './lift/history/history.component';
import { TrackComponent } from './lift/track/track.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewLiftComponent } from './new-lift/new-lift.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'prs/:lift', component: LiftComponent},
  {path: 'prs/:lift', component: BestComponent},
  {path: 'prs/:lift', component: HistoryComponent},
  {path: 'prs/:lift', component: TrackComponent},
  {path: 'new', component: NewLiftComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
