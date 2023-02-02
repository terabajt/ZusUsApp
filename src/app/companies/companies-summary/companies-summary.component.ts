import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { combineLatest, forkJoin, map, merge, mergeMap, Observable, of, find } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';





@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit{
  @Input() company_item: Company_item;
  @Input() company: Company;



  @ViewChild('paginator') paginator!: MatPaginator;


  displayedColumns: string[] = ['billing_date', 'billing_month', 'billing_us', 'billing_vat', 'billing_worker', 'billing_zus', 'key', 'company' ];



 companyItems$: Observable<Company_item[]> = this.companiesService.getItemsInfos();
 companiesData$: Observable<Company[]> = this.companiesService.getCompaniesInfos();


  constructor(private companiesService: CompaniesService) { }


// NEW SOLUTION
items$ = combineLatest({
  companyItems: this.companyItems$,
  companiesData: this.companiesData$
}).pipe(
  map(({
    companyItems, companiesData
  }) => {
    return companyItems.map( companyItem => ({
      companyItem: companyItem,
      companyData: companiesData.find(companyData => companyData.company_id === companyItem.company_id)
    }));
  })
);

dataSource = this.items$;

  ngOnInit() {

    this.items$.subscribe(res => console.log(res))

  }


}

