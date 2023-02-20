import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { Company_item } from 'src/app/models/company-item';
import { NewDataCompanyFormComponent } from '../new-data-company-form/new-data-company-form.component';

@Component({
  selector: 'app-new-company-item',
  templateUrl: './new-company-item.component.html',
  styleUrls: ['./new-company-item.component.scss']
})
export class NewCompanyItemComponent {
  @ViewChild('itemForm') itemForm: NewDataCompanyFormComponent;
  form: FormGroup;

  constructor(
    private companiesService: CompaniesService,
    private dialogRef: MatDialogRef<NewCompanyItemComponent>,
    private toast: MatSnackBar
  ) {}

  createCompanyItem() {
    this.companiesService.addItemInfo(this.itemForm.form.value).then(this.onCreatiingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatiingSuccess() {
    this.dialogRef.close();
    this.toast.open('Wpis został dodany', '', { panelClass: 'toast-success' });
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }
}
