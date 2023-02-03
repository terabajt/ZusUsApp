import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-company-item',
  templateUrl: './new-company-item.component.html',
  styleUrls: ['./new-company-item.component.scss']
})
export class NewCompanyItemComponent {
  constructor(private dialogRef: MatDialogRef<NewCompanyItemComponent>) {}
}
