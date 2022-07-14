import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ConatactDemoComponent } from './conatact-demo/conatact-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ConatactDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { } 
