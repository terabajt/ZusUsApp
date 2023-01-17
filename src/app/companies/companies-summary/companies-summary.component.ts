import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { of } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company_item } from 'src/app/models/company-item';

@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit {

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
      billing_us: 480,
      billing_worker: 500
    },
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
      billing_us: 480,
      billing_worker: 500
    },
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
      billing_us: 480,
      billing_worker: 500
    },
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
      billing_us: 480,
      billing_worker: 500
    }

  ]

  @ViewChild('paginator') paginator!: MatPaginator;



  displayedColumns: string[] = ['LP', 'id', 'billing_month', 'billing_date', 'billing_zus','billing_vat', 'billing_us', 'billing_worker'];
  dataSource = this.company_items;


  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.getCompaniesInfo().subscribe(console.log);
    this.companiesService.getItemInfo().subscribe(console.log);
  }

}
