import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [ {
  path:'',
  pathMatch:'full',
  redirectTo:'login'
},
{
  path:'login', component: LoginComponent
},
{
  path:'', component: LoginComponent
} , {
  path: 'dashboard',
  loadChildren: () => {
    return import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule);
  },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
