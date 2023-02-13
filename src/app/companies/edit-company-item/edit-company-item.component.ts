import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router,
    private toast: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.loadItem();
  }
  //Save editing items and inform about succes or error
  saveEditItem() {
    this.companiesService
      .saveEditFlight(this.item.key, this.newCompanyItemForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onError.bind(this));
  }

  //Remove item from server
  removeItem() {
    this.companiesService.removeItem(this.item.key).then(this.onRemoveSuccess.bind(this), this.onError.bind(this));
  }

  //Message that Edit item data has property sent to a server and then router to /dashboard
  private onEditSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.open('Zmiany zostały zapisane na serwerze', '', { panelClass: 'toast-success' });
  }

  //Message that  item data has property deleted from a server and then router to /dashboard
  private onRemoveSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.open('Dane zostały usunięte z serwera', '', { panelClass: 'toast-success' });
  }

  //Message that Edit item data has not property sent or remove from-to server

  private onError(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }
  //Load items to edit form
  private loadItem() {
    const key = this.route.snapshot.params['key'];
    this.companiesService
      .getCompanyItem(key)
      .pipe(tap(item => this.newCompanyItemForm?.setCompanyItem(item)))
      .subscribe(item => (this.item = item));
  }
}
