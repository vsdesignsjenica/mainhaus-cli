import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { ReferenceComponent } from './reference/reference.component';
import { KolekcijeComponent } from './kolekcije/kolekcije.component';
import { PlociceComponent } from './plocice/plocice.component';
import { PocetnaService } from "./pocetna/pocetna.service";

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    ONamaComponent,
    ReferenceComponent,
    KolekcijeComponent,
    PlociceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'pocetna',component:PocetnaComponent},
      {path:'kolekcije',component:KolekcijeComponent},
      {path:'plocice',component:PlociceComponent},
      {path:'o-nama',component:ONamaComponent},
      {path:'reference',component:ReferenceComponent},
      {path: '', redirectTo:'pocetna',pathMatch:'full'},
      {path: '**', redirectTo:'pocetna',pathMatch:'full'}
    ])
  ],
  providers: [PocetnaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
