import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  constructor(
    private dialogRef: MatDialogRef<CompanyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Company,
    private router: Router
  ) {
    this.company = data;
  }

  company: Company;
  close() {
    this.dialogRef.close();
  }

  goToEditCompanyDetails() {
    this.dialogRef.close();
    this.router.navigate(['/dashboard/CompaniesSummary/listOfCompanies', this.company.key]);
  }
}
