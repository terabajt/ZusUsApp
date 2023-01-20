import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private API_URL_ITEM='/items'
  private API_URL_COMPANIES='/companies'
  constructor(private db: AngularFireDatabase) { }

  getItemInfo(): Observable<Company_item[]> {
    return this.db.list<Company_item>(this.API_URL_ITEM).snapshotChanges().pipe(map(response => response.map((item: any) => this.assignKey(item))));
  }
  getCompaniesInfo(): Observable<Company[]> {
    return this.db.list<Company>(this.API_URL_COMPANIES).snapshotChanges().pipe(map(response => response.map((item: any) => this.assignKey(item))));
  }

  

  private assignKey(item) {
    return {...item.payload.val(), key: item.key }
  }
}
