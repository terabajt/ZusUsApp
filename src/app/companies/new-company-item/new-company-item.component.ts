import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CompaniesService } from 'src/app/core/services/companies.service';

@Component({
  selector: 'app-new-company-item',
  templateUrl: './new-company-item.component.html',
  styleUrls: ['./new-company-item.component.scss']
})
export class NewCompanyItemComponent {
  @ViewChild('itemForm') itemForm: NewCompanyItemComponent;
  form: any;

  constructor(private companiesService: CompaniesService, private dialogRef: MatDialogRef<NewCompanyItemComponent>) {}

  createCompanyItem() {
    console.log(this.itemForm);
    this.companiesService.addItemInfo(this.itemForm.form.value).then(this.onCreatiingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatiingSuccess() {
    this.dialogRef.close();
  }

  private onCreatingFailure() {
    console.log('some error');
  }
}
