import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';
import { MatTableModule } from '@angular/material/table';
import { CompaniesTableComponent } from './companies-summary/companies-table/companies-table.component';

@NgModule({
  declarations: [
    CompaniesSummaryComponent,
    CompaniesTableComponent
  ],
  exports: [CompaniesSummaryComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class CompaniesModule { }
