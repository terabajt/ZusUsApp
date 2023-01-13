import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environment';
import { MaterialModule } from './material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CoreModuleModule } from './core-module/core-module.module';
import { CompaniesModule } from './companies/companies.module';
import {  MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    MaterialModule,
    MatSlideToggleModule,
    CoreModuleModule,
    CompaniesModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
