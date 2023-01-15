import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CompaniesSummaryComponent
  ],
  exports: [CompaniesSummaryComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class CompaniesModule { }
