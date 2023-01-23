import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, forkJoin, map } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';

@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent {
  @Input() company_item: Company_item;
  @Input() company: Company;


  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = ['billing_date', 'billing_month', 'billing_us', 'billing_vat', 'billing_worker', 'billing_zus', 'company_id', 'key' ];

// getCompanyById(id: number): Observable<Company>{

// }



 companyItems$: Observable<Company_item[]> = this.companiesService.getItemInfo();


  companies$: Observable<any> = this.companiesService.getAll()


 dataSource = this.companyItems$;



  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.companies$.subscribe({next: value => console.log(value)})
  }


}

