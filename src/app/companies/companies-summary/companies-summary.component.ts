import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Company_item } from 'src/app/models/company-item';

@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit {



  company_items2 = [
    {
      id: 1,
      company_name: 'aaa',
      billing_month: 'sss'
    }
  ]

  dataSource : any = [];




  company_items: Company_item[] = [
    {
      id: 1,
      company: {
        id: 1,
        company_name: 'Terabajt Michał Pasynek',
        company_street: 'Wyszyńskiego 20/15',
        company_post_code: '11-100',
        company_country: 'Lidzbark Warmiński',
        company_email: 'terabajt@terabajtlw.pl',
        company_tax_zus_no: '00 0000 0000 0000 0000',
        company_tax_us_no: '00 0000 0000 0000 0000'
      },
      billing_month: 'styczeń 2023',
      billing_date: '01.01.2023',
      billing_zus: 344,
      billing_vat: 223,
      billing_worker: 500
    }
  ]
  displayedColumns = ['id', 'company_name', 'billing_month'];

  constructor() { }

  ngOnInit(): void {

  of('1', '3', '4').subscribe(response => {
      this.dataSource = response;
    });

  }

}
