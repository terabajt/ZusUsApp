import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { NewCompanyDetailsComponent } from '../new-company-details/new-company-details.component';

@Component({
  selector: 'app-list-of-companies',
  templateUrl: './list-of-companies.component.html',
  styleUrls: ['./list-of-companies.component.scss']
})
export class ListOfCompaniesComponent {
  @Input() company: Company;

  constructor(private comapniesService: CompaniesService, private router: Router, private toast: MatSnackBar, private dialog: MatDialog) {}

  displayedColumns: string[] = [
    'LP',
    'company_name',
    'company_email',
    'company_country',
    'company_post_code',
    'company_street',
    'company_tax_us_no',
    'company_tax_zus_no',
    'key',
    'company_id',
    'contex_menu'
  ];

  companiesData$: Observable<Company[]> = this.comapniesService.getCompaniesInfos();

  // Get data to display
  items$ = this.comapniesService.getCompaniesInfos();

  dataSource = this.items$;

  showDetails(companyItem) {
    // this.dialog.open(ItemDetailsComponent, { data: companyItem.companyItem });
  }

  //Remove item from top menu

  removeItem(key: string) {
    // this.companiesService.removeItem(key).then(this.onRemoveSuccess.bind(this), this.onError.bind(this));
  }

  //Message that  item data has property deleted from a server and then router to /dashboard
  private onRemoveSuccess() {
    this.router.navigate(['/dashboard']);
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
