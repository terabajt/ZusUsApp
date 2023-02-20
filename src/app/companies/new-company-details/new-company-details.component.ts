import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CompaniesService } from 'src/app/core/services/companies.service';

@Component({
  selector: 'app-new-company-details',
  templateUrl: './new-company-details.component.html',
  styleUrls: ['./new-company-details.component.scss']
})
export class NewCompanyDetailsComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NewCompanyDetailsComponent;
  form: FormGroup;

  constructor(private companiesService: CompaniesService, private dialogRef: MatDialogRef<NewCompanyDetailsComponent>) {}

  ngOnInit(): void {}

  createCompanyDetail() {
    this.companiesService.addDetailInfo(this.itemForm.form.value);
  }
}
