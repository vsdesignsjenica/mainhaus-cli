import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    ONamaComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'pocetna',component:PocetnaComponent},
      {path:'o-nama',component:ONamaComponent},
      {path:'reference',component:ReferenceComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
