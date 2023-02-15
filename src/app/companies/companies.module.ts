import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CompaniesSummaryComponent } from './companies-summary/companies-summary.component';
import { MatTableModule } from '@angular/material/table';
import { CompaniesTableComponent } from './companies-summary/companies-table/companies-table.component';
import { NewCompanyItemComponent } from './new-company-item/new-company-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NewCompanyItemFormComponent } from './new-company-item-form/new-company-item-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { EditCompanyItemComponent } from './edit-company-item/edit-company-item.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';

import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CompaniesSummaryComponent,
    CompaniesTableComponent,
    NewCompanyItemComponent,
    NewCompanyItemFormComponent,
    ItemDetailsComponent,
    EditCompanyItemComponent,
    SpinnerComponent
  ],
  exports: [CompaniesSummaryComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CompaniesRoutingModule,
    CoreModule
  ],
  entryComponents: [NewCompanyItemComponent, ItemDetailsComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }, DatePipe]
})
export class CompaniesModule {}
