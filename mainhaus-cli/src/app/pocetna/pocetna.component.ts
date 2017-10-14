import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor() { }

  scrollUp(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
  }

}
