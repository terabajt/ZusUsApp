import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  exports: [SidebarComponent],
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule

  ]

})
export class CoreModuleModule { }
