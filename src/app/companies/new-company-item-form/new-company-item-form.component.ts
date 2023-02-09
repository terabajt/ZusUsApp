import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';

@Component({
  selector: 'app-new-company-item-form',
  templateUrl: './new-company-item-form.component.html',
  styleUrls: ['./new-company-item-form.component.scss']
})
export class NewCompanyItemFormComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder, private companiesService: CompaniesService, private datePipe: DatePipe) {}

  month = [
    { label: 'Styczeń', value: 'Styczeń' },
    { label: 'Luty', value: 'Luty' },
    { label: 'Marzec', value: 'Marzec' },
    { label: 'Kwiecień', value: 'Kwiecień' },
    { label: 'Maj', value: 'Maj' },
    { label: 'Czerwiec', value: 'Czerwiec' },
    { label: 'Lipiec', value: 'Lipiec' },
    { label: 'Sierpień', value: 'Sierpień' },
    { label: 'Wrzesień', value: 'Wrzesień' },
    { label: 'Październik', value: 'Październik' },
    { label: 'Listopad', value: 'Listopad' },
    { label: 'Grudzień', value: 'Grudzień' }
  ];

  ngOnInit(): void {
    this.buildForm();
  }

  date = new Date();

  currentDate = this.datePipe.transform(this.date, 'dd.MM.yyy');

  private buildForm() {
    this.form = this.formBuilder.group({
      billing_date: [this.currentDate, { validators: [Validators.required] }],
      billing_month: ['', { validators: [Validators.required] }],
      billing_us: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      billing_vat: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      billing_worker: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      billing_zus: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      company_id: ''
    });
  }

  companiesData$: Observable<Company[]> = this.companiesService.getCompaniesInfos();

  setCompanyItem(newCompanyItem: Company_item) {
    const { key, ...formData } = newCompanyItem;
    this.form.patchValue(formData);
    console.log(formData);
  }
}
