import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company_item } from 'src/app/models/company-item';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private API_URL='/CompaniesSummary'
  constructor(private db: AngularFireDatabase) { }

  getCompaniesInfo(): Observable<any[]> {
    return this.db.list<any>(this.API_URL).snapshotChanges().pipe(map(response => response.map((CompaniesSummary: any) => this.assignKey(CompaniesSummary))));
  }


  private assignKey(CompaniesSummary) {
    return {...CompaniesSummary.payload.val(), key: CompaniesSummary.key }
  }
}
