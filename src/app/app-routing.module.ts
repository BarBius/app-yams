import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; 
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes: Routes = [

  {
    path: 'dashboard',
    canActivate: [AuthGuard],  
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
