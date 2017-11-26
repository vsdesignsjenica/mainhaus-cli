import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { ReferenceComponent } from './reference/reference.component';
import { KolekcijeComponent } from './kolekcije/kolekcije.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    ONamaComponent,
    ReferenceComponent,
    KolekcijeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'pocetna',component:PocetnaComponent},
      {path:'kolekcije',component:KolekcijeComponent},
      {path:'o-nama',component:ONamaComponent},
      {path:'reference',component:ReferenceComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
