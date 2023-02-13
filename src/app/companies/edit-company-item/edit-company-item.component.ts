import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company_item } from 'src/app/models/company-item';
import { NewCompanyItemFormComponent } from '../new-company-item-form/new-company-item-form.component';

@Component({
  selector: 'app-edit-company-item',
  templateUrl: './edit-company-item.component.html',
  styleUrls: ['./edit-company-item.component.scss']
})
export class EditCompanyItemComponent {
  @ViewChild('newCompanyItemForm') newCompanyItemForm: NewCompanyItemFormComponent;

  item: Company_item;

  constructor(private route: ActivatedRoute, private companiesService: CompaniesService, private router: Router) {}

  ngAfterViewInit() {
    this.loadItem();
  }

  private loadItem() {
    const key = this.route.snapshot.params['key'];
    this.companiesService
      .getCompanyItem(key)
      .pipe(tap(item => this.newCompanyItemForm?.setCompanyItem(item)))
      .subscribe(item => (this.item = item));
  }
}
