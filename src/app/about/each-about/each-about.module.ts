import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EachAboutRoutingModule } from './each-about-routing.module';
import { EachAboutComponent } from './each-about.component';


@NgModule({
  declarations: [EachAboutComponent],
  imports: [
    CommonModule,
    EachAboutRoutingModule
  ]
})
export class EachAboutModule { }
