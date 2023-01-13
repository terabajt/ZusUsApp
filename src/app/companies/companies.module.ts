import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';



@NgModule({
  declarations: [
    CompaniesSummaryComponent
  ],
  exports: [CompaniesSummaryComponent],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
