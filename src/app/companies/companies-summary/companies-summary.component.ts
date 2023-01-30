import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { combineLatest, forkJoin, map, merge, mergeMap, Observable, of, take } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';
import { CompaniesModule } from '../companies.module';
import { HttpClient } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';



@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit{
  @Input() company_item: Company_item;
  @Input() company: Company;


  @ViewChild('paginator') paginator!: MatPaginator;


  displayedColumns: string[] = ['billing_date', 'billing_month', 'billing_us', 'billing_vat', 'billing_worker', 'billing_zus', 'company_id', 'key', 'company' ];



 companyItems$: Observable<Company_item[]> = this.companiesService.getItemsInfos();
 companyData$: Observable<Company[]> = this.companiesService.getCompaniesInfos();
 get$: Observable<Company> = this.companiesService.getIdInfo("1")

// show = {
// next: value => value.map(
//   value => {console.log(value)
//   })

// };


 dataSource = this.companyItems$;


  constructor(private companiesService: CompaniesService) { }
  // show$ = this.companiesService.getIdInfo$("1")

  ngOnInit() {
    // this.show$.subscribe(res => res.company_name)
    this.companyItems$.subscribe(res => console.log(res))
    this.companyData$.subscribe(res => console.log(res))
    this.get$.subscribe(res => console.log(res.company_name))

  }


}

