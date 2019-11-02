import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LiftComponent } from './lift/lift.component';
import { BestComponent } from './lift/best/best.component';
import { HistoryComponent } from './lift/history/history.component';
import { TrackComponent } from './lift/track/track.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'prs/:lift', component: LiftComponent},
  {path: 'prs/:lift/best', component: BestComponent},
  {path: 'prs/:lift/history', component: HistoryComponent},
  {path: 'prs/:lift/track', component: TrackComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
