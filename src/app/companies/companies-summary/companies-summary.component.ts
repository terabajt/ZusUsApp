import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';
import { NewCompanyItemComponent } from '../new-company-item/new-company-item.component';

@Component({
  selector: 'app-companies-summary',
  templateUrl: './companies-summary.component.html',
  styleUrls: ['./companies-summary.component.scss']
})
export class CompaniesSummaryComponent implements OnInit {
  @Input() company_item: Company_item;
  @Input() company: Company;

  constructor(private dialog: MatDialog) {}

  openNewCompanyItemModal() {
    this.dialog.open(NewCompanyItemComponent);
  }

  ngOnInit() {}
}
