import { Component, Input } from '@angular/core';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { combineLatest, find, map, Observable, tap } from 'rxjs';
import { Company_item } from 'src/app/models/company-item';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Route } from '@angular/router';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-pdf-create',
  templateUrl: './pdf-create.component.html',
  styleUrls: ['./pdf-create.component.scss']
})
export class PdfCreateComponent {
  constructor(private comapniesService: CompaniesService, private route: ActivatedRoute) {}
  @Input() company_item: Company_item;
  @Input() company: Company;

  //Get data to show on print page
  companyItems$: Observable<Company_item[]> = this.comapniesService.getItemsInfos();
  companiesData$: Observable<Company[]> = this.comapniesService.getCompaniesInfos();

  // NEW SOLUTION
  items$ = combineLatest({
    companyItems: this.companyItems$,
    companiesData: this.companiesData$
  }).pipe(
    map(({ companyItems, companiesData }) => {
      return companyItems.map(companyItem => ({
        companyItem: companyItem,
        companyData: companiesData.find(companyData => companyData.company_id === companyItem.company_id)
      }));
    })
  );

  items2$: any;

  getItem(key: string) {
    this.items2$ = this.items$.pipe(map(res => res.filter(res => res.companyItem.key === key)));
  }

  ngAfterViewInit() {
    const key = this.route.snapshot.params['key'];
    this.getItem(key);
  }

  //Print method
  pdfCreate() {
    const pages = document.querySelector('.page') as HTMLElement;
    var opt = {
      margin: 1,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' }
    };
    // New Promise-based usage:
    html2pdf().from(pages).set(opt).save();
  }
}
