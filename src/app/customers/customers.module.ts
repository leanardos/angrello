import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomersRoutingModule } from './customers-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';



@NgModule({
  declarations: [
    ListPageComponent,
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ]
})
export class CustomersModule { }
