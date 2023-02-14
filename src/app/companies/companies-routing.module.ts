import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';
import { EditCompanyItemComponent } from './edit-company-item/edit-company-item.component';

const routes: Routes = [
  { path: '', component: CompaniesSummaryComponent },
  { path: ':key', component: EditCompanyItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
