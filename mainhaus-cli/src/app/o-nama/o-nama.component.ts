import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent implements OnInit {

  constructor() { }

  scrollUp(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
  }

}
