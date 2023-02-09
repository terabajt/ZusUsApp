import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company_item } from 'src/app/models/company-item';
import { CompaniesTableComponent } from '../companies-summary/companies-table/companies-table.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  companyItem: Company_item;
  constructor(
    private dialogRef: MatDialogRef<ItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Company_item,
    private router: Router
  ) {
    this.companyItem = data;
  }

  close() {
    this.dialogRef.close();
  }
  goToEditItemDetails() {
    this.dialogRef.close();
    this.router.navigate(['/dashboard/CompaniesSummary', this.companyItem.key]);
  }
}
