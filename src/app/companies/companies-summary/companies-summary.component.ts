import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';

@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit {
  @Input() company_item: Company_item;
  @Input() company: Company;

  ngOnInit() {}
}
