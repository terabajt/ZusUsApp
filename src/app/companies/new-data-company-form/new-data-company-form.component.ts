import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count, firstValueFrom, last, lastValueFrom, map, mergeAll, tap } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { ListOfCompaniesComponent } from '../list-of-companies/list-of-companies.component';
import { NewCompanyDetailsComponent } from '../new-company-details/new-company-details.component';

@Component({
  selector: 'app-new-data-company-form',
  templateUrl: './new-data-company-form.component.html',
  styleUrls: ['./new-data-company-form.component.scss']
})
export class NewDataCompanyFormComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NewCompanyDetailsComponent;
  // @ViewChild('id') id: ListOfCompaniesComponent;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private comapniesService: CompaniesService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  getID() {
    let value;
    this.id$.subscribe(res => (value = res));
    console.log('Wartosc' + value);
    const result = this.id$.pipe(tap(res => res));

    console.log(result);
    return value;
  }

  id$ = this.comapniesService.getCompaniesInfos().pipe(
    map(res =>
      res.map(res => {
        return res.company_id;
        mergeAll();
      })
    )
  );

  private buildForm() {
    this.form = this.formBuilder.group({
      company_name: ['', { validators: [Validators.required] }],
      company_email: ['', { validators: [Validators.required] }],
      company_country: ['', { validators: [Validators.required] }],
      company_post_code: ['', { validators: [Validators.required] }],
      company_street: ['', { validators: [Validators.required] }],
      company_tax_us_no: ['', { validators: [Validators.required] }],
      company_tax_zus_no: ['', { validators: [Validators.required] }],
      company_id: this.getID()
    });
  }
}
