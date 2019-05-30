import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  images = ['assets/img/bg.jpg', 'assets/img/bg-2.jpg', 'assets/img/bg-1.jpg'];
  ngOnInit() {
  }
 
}
