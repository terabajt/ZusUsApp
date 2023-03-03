import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { NewCompanyDetailsComponent } from '../new-company-details/new-company-details.component';

@Component({
  selector: 'app-list-of-companies',
  templateUrl: './list-of-companies.component.html',
  styleUrls: ['./list-of-companies.component.scss']
})
export class ListOfCompaniesComponent {
  @Input() company: Company;

  constructor(private comapniesService: CompaniesService, private router: Router, private toast: MatSnackBar, private dialog: MatDialog) {}

  //Row to display on the list of items
  displayedColumns: string[] = [
    'LP',
    'company_name',
    'company_email',
    'company_country',
    'company_post_code',
    'company_street',
    'company_tax_us_no',
    'company_tax_zus_no',
    'contex_menu'
  ];

  //Get a companies data from datsabase
  companiesData$: Observable<Company[]> = this.comapniesService.getCompaniesInfos();

  // Get data to display
  items$ = this.comapniesService.getCompaniesInfos();

  //Push data of company item to display it on view
  dataSource = this.items$;

  //Todo
  showDetails(companyDetails) {
    this.dialog.open(CompanyDetailsComponent, { data: companyDetails });
  }

  //Remove company from databse
  removeItem(key: string) {
    this.comapniesService.removeCompany(key).then(this.onRemoveSuccess.bind(this), this.onError.bind(this));
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

  openNewCompanyDataModal() {
    this.dialog.open(NewCompanyDetailsComponent);
  }

  tr = document.getElementsByTagName('tr');
  id = this.tr.length + 1;
}
