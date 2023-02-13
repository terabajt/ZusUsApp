import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { forkJoin, Observable } from 'rxjs';
import { concatMap, filter, first, map, take, tap } from 'rxjs/operators';
import { Company } from 'src/app/models/company';
import { Company_item } from 'src/app/models/company-item';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private API_URL_ITEM = '/items';
  private API_URL_COMPANIES = '/companies';
  flush: string;

  constructor(private db: AngularFireDatabase) {}
  //Get Items Infos to display item list
  getItemsInfos(): Observable<Company_item[]> {
    return this.db
      .list<Company_item>(this.API_URL_ITEM)
      .snapshotChanges()
      .pipe(map(response => response.map(item => this.assignKey(item))));
  }

  //Get Companies Infos  to display item list

  getCompaniesInfos(): Observable<Company[]> {
    return this.db
      .list<Company>(this.API_URL_COMPANIES)
      .snapshotChanges()
      .pipe(map(response => response.map(item => this.assignKey(item))));
  }

  //Get Item to form to edit
  getCompanyItem(key: string): Observable<Company_item> {
    return this.db
      .object<Company_item>(`${this.API_URL_ITEM}/${key}`)
      .snapshotChanges()
      .pipe(map(item => this.assignKey(item)));
  }

  //Push data item of edit form to server
  saveEditFlight(key: string, item: Company_item) {
    return this.db.object<Company_item>(`${this.API_URL_ITEM}/${key}`).update(item);
  }
  //Push data item to server

  addItemInfo(itemInfo: Company_item) {
    return this.db.list<Company_item>(this.API_URL_ITEM).push(itemInfo);
  }

  //Add databases id key to data
  private assignKey(item) {
    return { ...item.payload.val(), key: item.key };
  }
  //Remove item from database
  removeItem(key: string) {
    return this.db.object(`${this.API_URL_ITEM}/${key}`).remove();
  }
}
