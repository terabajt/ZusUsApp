import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';
import { MatTableModule } from '@angular/material/table';
import { CompaniesTableComponent } from './companies-summary/companies-table/companies-table.component';
import { NewCompanyItemComponent } from './new-company-item/new-company-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NewCompanyItemFormComponent } from './new-company-item-form/new-company-item-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CompaniesSummaryComponent, CompaniesTableComponent, NewCompanyItemComponent, NewCompanyItemFormComponent],
  exports: [CompaniesSummaryComponent],
  imports: [CommonModule, MatTableModule, MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule],
  entryComponents: [NewCompanyItemComponent]
})
export class CompaniesModule {}
