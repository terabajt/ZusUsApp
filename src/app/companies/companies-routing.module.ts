import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';
import { EditCompanyDataComponent } from './edit-company-data/edit-company-data.component';
import { EditCompanyItemComponent } from './edit-company-item/edit-company-item.component';
import { ListOfCompaniesComponent } from './list-of-companies/list-of-companies.component';
import { PdfCreateComponent } from './pdf-create/pdf-create.component';

const routes: Routes = [
  { path: '', component: CompaniesSummaryComponent },
  { path: 'print/:key', component: PdfCreateComponent },
  { path: 'listOfCompanies', component: ListOfCompaniesComponent },
  { path: ':key', component: EditCompanyItemComponent },
  { path: 'listOfCompanies/:key', component: EditCompanyDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
