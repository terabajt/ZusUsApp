import { Injectable } from '@angular/core';
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
  constructor(private db: AngularFireDatabase) { }

  getItemInfo(): Observable<any[]> {
    return this.db.list<Company_item>(this.API_URL_ITEM).snapshotChanges().pipe(
      map(response => response.map((item) => this.assignKey(item))),
        map(res => res.map(item => ({...item, company: this.getIdInfo$("1")}))));
  }


  getCompaniesInfo(): Observable<Company[]> {
    return this.db.list<Company>(this.API_URL_COMPANIES).snapshotChanges().pipe(map(response => response.map((item) => this.assignKey(item))));
  }

  getIdInfo(id: string): Observable<Company> {
    return this.getCompaniesInfo().pipe(map(res => res.find(re => re['key'] == id)))
  }
  getIdInfo$(id: string) {
    return  this.getIdInfo(id).subscribe(event => event = event
      )
  }


  private assignKey(item) {
    return {...item.payload.val(), key: item.key }
  }
}
