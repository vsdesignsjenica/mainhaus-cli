import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    ONamaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'pocetna',component:PocetnaComponent},
      {path:'o-nama',component:ONamaComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
