import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-create',
  templateUrl: './pdf-create.component.html',
  styleUrls: ['./pdf-create.component.scss']
})
export class PdfCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
