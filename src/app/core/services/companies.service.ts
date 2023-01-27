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

  private API_URL_ITEM='/items'
  private API_URL_COMPANIES='/companies'
  flush: string;
  constructor(private db: AngularFireDatabase) { }

  getItemInfo(): Observable<any[]> {
    return this.db.list<Company_item>(this.API_URL_ITEM).snapshotChanges().pipe(
      map(response => response.map((item) => this.assignKey(item))),
        map(res => res.map(name => ({...name, company: this.getIdInfo("1").pipe(
          map( res => res.company_name),
          take(1)
        ).subscribe(value => value)}))));
  }


  getCompaniesInfo(): Observable<Company[]> {
    return this.db.list<Company>(this.API_URL_COMPANIES).snapshotChanges().pipe(map(response => response.map((item) => this.assignKey(item))));
  }

  getIdInfo(id: string): Observable<Company> {
    return this.getCompaniesInfo().pipe(map(res => res.find(re => re['key'] == id), take(1)))
  }
  getIdInfo$(id: string) {
    return  this.getIdInfo(id).subscribe(event => {
      this.flush = event.company_name.toString();
      return flush.length })

  }


  private assignKey(item) {
    return {...item.payload.val(), key: item.key }
  }
  private getCompanyName(name) {
    return {...name, company: this.getIdInfo$("1") }
  }
}
