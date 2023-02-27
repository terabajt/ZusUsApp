import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { MatPaginator } from '@angular/material/paginator';
import { ItemDetailsComponent } from '../../item-details/item-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewCompanyItemFormComponent } from '../../new-company-item-form/new-company-item-form.component';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesTableComponent {
  @Input() company_item: Company_item;
  @Input() company: Company;
  @Input() companyItem: Company_item;
  item: any;

  constructor(
    private companiesService: CompaniesService,
    private dialog: MatDialog,
    private router: Router,
    private toast: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('newCompanyItemForm') newCompanyItemForm: NewCompanyItemFormComponent;

  //Row to display on teh mat-table viewer
  displayedColumns: string[] = [
    'LP',
    'billing_date',
    'billing_month',
    'billing_us',
    'billing_vat',
    'billing_worker',
    'billing_zus',
    'company',
    'contex_menu'
  ];

  //Get data of company items and company data to get ID of companies
  companyItems$: Observable<Company_item[]> = this.companiesService.getItemsInfos();
  companiesData$: Observable<Company[]> = this.companiesService.getCompaniesInfos();

  // NEW SOLUTION
  items$ = combineLatest({
    companyItems: this.companyItems$,
    companiesData: this.companiesData$
  }).pipe(
    map(({ companyItems, companiesData }) => {
      return companyItems.map(companyItem => ({
        companyItem: companyItem,
        companyData: companiesData.find(companyData => companyData.company_id === companyItem.company_id)
      }));
    })
  );

  //Push data to display into mat-table viewer
  dataSource = this.items$;

  //Showing details of row on mat-table displaying
  showDetails(companyItem) {
    this.dialog.open(ItemDetailsComponent, { data: companyItem.companyItem });
  }

  //Print item to pdf
  printItem(key: string) {
    this.router.navigate(['/dashboard/CompaniesSummary/print', key]);
  }

  //Remove item from top menu
  removeItem(key: string) {
    this.companiesService.removeItem(key).then(this.onRemoveSuccess.bind(this), this.onError.bind(this));
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
  //Send mail of the item to it's company
  sendMail(mail: string, subject: string, body: string) {
    window.open(`mailto:${mail}?subject=${subject}&body=${body}`);
  }
}
