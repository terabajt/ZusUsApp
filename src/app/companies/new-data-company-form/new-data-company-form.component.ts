import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count, filter, firstValueFrom, last, lastValueFrom, map, mergeAll, tap } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { NewCompanyDetailsComponent } from '../new-company-details/new-company-details.component';

@Component({
  selector: 'app-new-data-company-form',
  templateUrl: './new-data-company-form.component.html',
  styleUrls: ['./new-data-company-form.component.scss']
})
export class NewDataCompanyFormComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NewCompanyDetailsComponent;

  constructor(private formBuilder: FormBuilder, private comapniesService: CompaniesService) {}
  public form: FormGroup;

  ngOnInit(): void {
    //Get the last company id number from the database, add 1 to it and renrer taht id to the next one company id
    this.id$
      .pipe(
        map((a: any) => a.length + 1),
        filter(id => id !== undefined)
      )
      .subscribe(id => {
        console.log(id);
        this.form.controls['company_id'].setValue(id);
      });
    //Init form to add the new one of company to database
    this.buildForm();
  }
  //Set data to form from key param
  setCompanyData(item: any) {
    const { key, ...formData } = item;
    this.form.patchValue(formData);
    console.log('Poszło?');
  }
  //Return companies id from database to id$
  id$: any = this.comapniesService.getCompaniesInfos().pipe(
    map(res =>
      res.map(res => {
        return res.company_id;
      })
    )
  );

  private buildForm() {
    this.form = this.formBuilder.group({
      company_name: ['', { validators: [Validators.required] }],
      company_email: ['', { validators: [Validators.required, Validators.email] }],
      company_country: ['', { validators: [Validators.required] }],
      company_post_code: ['', { validators: [Validators.required, Validators.pattern(/(\d{2}-\d{3}$)/gm)] }],
      company_street: ['', { validators: [Validators.required] }],
      company_tax_us_no: ['', { validators: [Validators.required, Validators.pattern(/^(\d{26,26})$/gm)] }],
      company_tax_zus_no: ['', { validators: [Validators.required, Validators.pattern(/^(\d{26,26})$/gm)] }],
      //Company_id is init (autoincrement) on ngOnInit
      company_id: ''
    });
  }
}
