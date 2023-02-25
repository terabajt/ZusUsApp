import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count, filter, firstValueFrom, last, lastValueFrom, map, mergeAll, tap } from 'rxjs';
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
      company_email: ['', { validators: [Validators.required] }],
      company_country: ['', { validators: [Validators.required] }],
      company_post_code: ['', { validators: [Validators.required] }],
      company_street: ['', { validators: [Validators.required] }],
      company_tax_us_no: ['', { validators: [Validators.required] }],
      company_tax_zus_no: ['', { validators: [Validators.required] }],
      //Company_id is init on ngOnInit
      company_id: ''
    });
  }
}
