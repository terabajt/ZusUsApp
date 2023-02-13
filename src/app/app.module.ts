import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { environment } from '../../environment';
import { MaterialModule } from './material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { CompaniesModule } from './companies/companies.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    CoreModule,
    MaterialModule,
    MatSlideToggleModule,
    MatTableModule,
    CompaniesModule,
    NgbModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
