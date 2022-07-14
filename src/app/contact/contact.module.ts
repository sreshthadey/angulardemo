import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import {BmxFormModule} from 'ngx-bmx-components';
import { ConatactDemoComponent } from './conatact-demo/conatact-demo.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,
    ConatactDemoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BmxFormModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
