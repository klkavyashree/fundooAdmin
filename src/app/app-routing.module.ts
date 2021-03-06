import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from '../app/components/admin-login/admin-login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ApproveComponent } from '../app/components/approve/approve.component';
import { OrderApproveComponent } from './components/order-approve/order-approve.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'approve',
    component: ApproveComponent
  },
  {
    path:'order',
    component:OrderApproveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
