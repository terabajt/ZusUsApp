import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { combineLatest, forkJoin, map, merge, Observable, of, take } from 'rxjs';
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
  dataSource: (Company_item | Company)[];

displayCompanyName() {

}

  displayedColumns: string[] = ['billing_date', 'billing_month', 'billing_us', 'billing_vat', 'billing_worker', 'billing_zus', 'company_name', 'key' ];


 companyItems$: Observable<Company_item[]> = this.companiesService.getItemInfo();
 companyName$: Observable<Company[]> = this.companiesService.getCompaniesInfo();

 companiesInfo$ = merge(this.companyItems$, this.companyName$)


//  dataSource = this.companyItems$;

 company$: Observable<Company[]> = this.companiesService.getCompaniesInfo()

  constructor(private companiesService: CompaniesService) { }


  ngOnInit() {
    combineLatest(this.companyItems$, this.companyName$).pipe(
      take(1),     // <-- remove it if the data stream needs to persist
      map(reponse => [...reponse[0], ...reponse[1]])
    ).subscribe(
      reponse => {
        this.dataSource = reponse;
      }
    )



    console.log("d")
    this.companiesInfo$.subscribe(res =>
      console.log(res)
    )
  }


}
