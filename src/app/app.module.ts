import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environment';
import { MaterialModule } from './material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CoreModuleModule } from './core-module/core-module.module';
import { CompanySummaryComponent } from './company-summary/company-summary.component';


@NgModule({
  declarations: [AppComponent, CompanySummaryComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    MaterialModule,
    MatSlideToggleModule,
    CoreModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
