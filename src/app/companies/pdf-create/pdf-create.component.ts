import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { combineLatest, find, map, Observable, tap } from 'rxjs';
import { Company_item } from 'src/app/models/company-item';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Route } from '@angular/router';

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

  items2$: any = this.items$;

  getItemToPrint;

  getItem(key: string) {
    this.getItemToPrint = this.items$.subscribe(res => res.find(res => key === res.companyItem.key));
  }

  ngAfterViewInit() {
    const key = this.route.snapshot.params['key'];
    this.getItem('-NO6C9HwpQZlXnzrB14o');
  }

  //Print method
  onConfirm() {
    const pages = document.querySelector('.page') as HTMLElement;
    this.exportAllToPDF(pages);
  }

  exportAllToPDF(pages: HTMLElement) {
    const doc = new jsPDF('p', 'px', 'a4');

    doc.html(pages, {
      callback: (doc: jsPDF) => {
        doc.save('pdf-export');
      }
    });
  }
}
