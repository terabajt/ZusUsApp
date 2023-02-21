import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from 'src/app/core/services/companies.service';

@Component({
  selector: 'app-new-data-company-form',
  templateUrl: './new-data-company-form.component.html',
  styleUrls: ['./new-data-company-form.component.scss']
})
export class NewDataCompanyFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private comapniesService: CompaniesService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      company_name: ['', { validators: [Validators.required] }],
      company_email: ['', { validators: [Validators.required] }],
      company_country: ['', { validators: [Validators.required] }],
      company_post_code: ['', { validators: [Validators.required] }],
      company_street: ['', { validators: [Validators.required] }],
      company_tax_us_no: ['', { validators: [Validators.required] }],
      company_tax_zus_no: ['', { validators: [Validators.required] }],
      company_id: ''
    });
  }
}
