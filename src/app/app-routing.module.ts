import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesSummaryComponent } from './companies/companies-summary/companies-summary.component';
import { EditCompanyItemComponent } from './companies/edit-company-item/edit-company-item.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'CompaniesSummary', pathMatch: 'full' },
      { path: 'CompaniesSummary', component: CompaniesSummaryComponent },
      { path: 'CompaniesSummary/:key', component: EditCompanyItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
