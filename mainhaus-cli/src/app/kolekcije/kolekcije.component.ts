import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kolekcije',
  templateUrl: './kolekcije.component.html',
  styleUrls: ['./kolekcije.component.css']
})
export class KolekcijeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollUp(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

}
