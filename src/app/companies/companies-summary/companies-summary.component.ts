import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
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

displayCompanyName() {

}

  displayedColumns: string[] = ['billing_date', 'billing_month', 'billing_us', 'billing_vat', 'billing_worker', 'billing_zus', 'company_id', 'key' ];



 companyItems$: Observable<Company_item[]> = this.companiesService.getItemInfo();


 dataSource = this.companyItems$;

 company$: Observable<Company[]> = this.companiesService.getCompaniesInfo()

  constructor(private companiesService: CompaniesService) { }


}
