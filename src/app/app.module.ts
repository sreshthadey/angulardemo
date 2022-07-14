import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import {BmxFormModule} from 'ngx-bmx-components';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    BmxFormModule,
    HotToastModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
