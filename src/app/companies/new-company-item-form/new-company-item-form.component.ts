import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-new-company-item-form',
  templateUrl: './new-company-item-form.component.html',
  styleUrls: ['./new-company-item-form.component.scss']
})
export class NewCompanyItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private companiesService: CompaniesService) {}

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

  private buildForm() {
    this.form = this.formBuilder.group({
      companyName: ['', { validators: [Validators.required] }],
      billingDate: ['', { validators: [Validators.required] }],
      billingMonth: ['', { validators: [Validators.required] }],
      billingUs: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      billingVat: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      billingWorker: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }],
      billingZus: ['', { validators: [Validators.required, Validators.pattern('[1-9]*')] }]
    });
  }

  companiesData$: Observable<Company[]> = this.companiesService.getCompaniesInfos();
}
