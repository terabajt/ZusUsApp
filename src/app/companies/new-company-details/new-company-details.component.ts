import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompaniesService } from 'src/app/core/services/companies.service';
@Component({
  selector: 'app-new-company-details',
  templateUrl: './new-company-details.component.html',
  styleUrls: ['./new-company-details.component.scss']
})
export class NewCompanyDetailsComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NewCompanyDetailsComponent;
  form: FormGroup;

  constructor(
    private companiesService: CompaniesService,
    private dialogRef: MatDialogRef<NewCompanyDetailsComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createCompanyDetail() {
    this.companiesService.addDetailInfo(this.itemForm.form.value);
    this.dialogRef.close();
  }
}
