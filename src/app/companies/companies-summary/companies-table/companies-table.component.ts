import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss']
})
export class CompaniesTableComponent implements OnInit {
  @Input() company_item: Company_item;
  @Input() company: Company;

  constructor(private companiesService: CompaniesService) {}

  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = [
    'billing_date',
    'billing_month',
    'billing_us',
    'billing_vat',
    'billing_worker',
    'billing_zus',
    'key',
    'company'
  ];

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

  dataSource = this.items$;

  ngOnInit(): void {}
}
