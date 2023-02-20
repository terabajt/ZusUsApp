import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';
import customfonts from 'src/assets/customfonts';
import vfs_fonts from 'src/assets/vfs_fonts';
import html2canvas from 'html2canvas';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { combineLatest, find, map, Observable, tap } from 'rxjs';
import { Company_item } from 'src/app/models/company-item';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Route } from '@angular/router';
import { FreeSans } from '../pdf-create/FreeSans-normal';

@Component({
  selector: 'app-pdf-create',
  templateUrl: './pdf-create.component.html',
  styleUrls: ['./pdf-create.component.scss']
})
export class PdfCreateComponent {
  constructor(private comapniesService: CompaniesService, private route: ActivatedRoute) {}
  @Input() company_item: Company_item;
  @Input() company: Company;
  @Input() freeSans: FreeSans;
  @Input() getVfs: vfs_fonts;

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
    this.getItem('-NO6C9HwpQZlXnzrB14o');
  }

  //Print method
  onConfirm() {
    const pages = document.querySelector('.page') as HTMLElement;
    this.exportAllToPDF(pages);
  }

  const = require('pdfkit');
  blobStream = require('blob-stream');

  exportAllToPDF(pages: HTMLElement) {
    const doc = new jsPDF('p', 'px', 'a4');

    doc.html(pages, {
      callback: (doc: jsPDF) => {
        // doc.addFont('Helvetica', 'Helvetica', 'normal', 'Identity-H');
        // doc.setFont('Courier');
        // doc.addFileToVFS('FreeSans.ttf', 'base64enc');
        // doc.addFont('FreeSans.ttf', 'custom', 'normal');
        // doc.setFont('custom');
        // doc.setFont('freeSans', 'normal');
        // doc.setFontType('normal');
        // doc.setFontSize(12);
        // console.log(doc.getFontList());
        doc.addFont('Abha.ttf', 'Abha', 'normal', 'Identity-H');
        doc.setFont('Abha'); // set font
        doc.save('pdf-export');
      }
    });
  }
}
