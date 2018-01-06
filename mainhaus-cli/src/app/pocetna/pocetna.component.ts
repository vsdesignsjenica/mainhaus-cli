import { Component, OnInit } from '@angular/core';
import { Komentari } from "../common/komentari.interface";
import { PocetnaService } from './pocetna.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  Komentari:Komentari[];
  constructor(private pocetnaService:PocetnaService) { }

  scrollUp(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.pocetnaService.getKomentari().subscribe(res=>{this.Komentari=res;console.log(this.Komentari)});
  }

}
