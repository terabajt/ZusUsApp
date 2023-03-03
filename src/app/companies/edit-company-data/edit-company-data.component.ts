import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { NewDataCompanyFormComponent } from '../new-data-company-form/new-data-company-form.component';

@Component({
  selector: 'app-edit-company-data',
  templateUrl: './edit-company-data.component.html',
  styleUrls: ['./edit-company-data.component.scss']
})
export class EditCompanyDataComponent {
  @ViewChild('newDataCompanyForm') newDataCompanyForm: NewDataCompanyFormComponent;

  item: Company;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router,
    private toast: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.loadItem();
  }
  //Save editing items and inform about succes or error
  saveEditItem() {
    this.companiesService
      .saveEditCompanyData(this.item.key, this.newDataCompanyForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onError.bind(this));
  }

  //Remove data company from server
  removeItem() {
    this.companiesService.removeDataCompany(this.item.key).then(this.onRemoveSuccess.bind(this), this.onError.bind(this));
  }

  //Message that Edit item data has property sent to a server and then router to /dashboard
  private onEditSuccess() {
    this.router.navigate(['/dashboard/CompaniesSummary/listOfCompanies']);
    this.toast.open('Zmiany zostały zapisane na serwerze', '', { panelClass: 'toast-success' });
  }

  //Message that  item data has property deleted from a server and then router to /dashboard
  private onRemoveSuccess() {
    this.router.navigate(['/dashboard/CompaniesSummary/listOfCompanies']);
    this.toast.open('Dane zostały usunięte z serwera', '', { panelClass: 'toast-success' });
  }

  //Message that Edit item data has not property sent or remove from-to server

  private onError(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }
  //Load items to edit form
  private loadItem() {
    const key = this.route.snapshot.params['key'];
    this.companiesService
      .getCompanyData(key)
      .pipe(
        tap(item => {
          console.log(item);
          this.newDataCompanyForm?.setCompanyData(item);
        })
      )
      .subscribe(item => (this.item = item));
  }

  //Close form
  formClose() {
    this.router.navigate(['/dashboard/CompaniesSummary/listOfCompanies']);
  }
  //Reset form to original state
  formReset() {
    this.loadItem();
  }
}
