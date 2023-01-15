import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Company_item } from 'src/app/models/company-item';
import { Employee } from 'src/app/models/model';

@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit {



  EmpData : Employee[] =[{
    "Id": 1,
    "FirstName": "Johannah",
    "LastName": "Kiffin",
    "Email": "jkiffin0@google.pl",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I"
  }, {
    "Id": 2,
    "FirstName": "Eldin",
    "LastName": "Astbery",
    "Email": "eastbery1@geocities.jp",
    "Gender": "M",
    "JobTitle": "Senior Editor"
  }, {
    "Id": 3,
    "FirstName": "Nahum",
    "LastName": "Mounce",
    "Email": "nmounce2@vk.com",
    "Gender": "M",
    "JobTitle": "Programmer II"
  }, {
    "Id": 4,
    "FirstName": "Gallard",
    "LastName": "Standell",
    "Email": "gstandell3@europa.eu",
    "Gender": "M",
    "JobTitle": "Account Representative II"
  }, {
    "Id": 5,
    "FirstName": "Koenraad",
    "LastName": "Domleo",
    "Email": "kdomleo4@cornell.edu",
    "Gender": "M",
    "JobTitle": "Quality Control Specialist"
  }, {
    "Id": 6,
    "FirstName": "Uriah",
    "LastName": "Turbat",
    "Email": "uturbat5@aol.com",
    "Gender": "M",
    "JobTitle": "Accounting Assistant II"
  }, {
    "Id": 7,
    "FirstName": "Waldemar",
    "LastName": "Fowley",
    "Email": "wfowley6@sun.com",
    "Gender": "M",
    "JobTitle": "Account Coordinator"
  }, {
    "Id": 8,
    "FirstName": "Rodolfo",
    "LastName": "Trenchard",
    "Email": "rtrenchard7@yandex.ru",
    "Gender": "M",
    "JobTitle": "Data Coordiator"
  }, {
    "Id": 9,
    "FirstName": "Konstance",
    "LastName": "Dudek",
    "Email": "kdudek8@techcrunch.com",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I"
  }, {
    "Id": 10,
    "FirstName": "Monti",
    "LastName": "Perton",
    "Email": "mperton9@youtube.com",
    "Gender": "M",
    "JobTitle": "Operator"
  }];



  displayedColumns: string[] = ['Id', 'JobTitle', 'LastName', 'Email','Gender','Gender', 'FirstName'];


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
  constructor() { }

  ngOnInit(): void {

  }

}
