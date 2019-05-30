import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetaured-product',
  templateUrl: './fetaured-product.component.html',
  styleUrls: ['./fetaured-product.component.css']
})
export class FetauredProductComponent implements OnInit {

  constructor() { }
  images =['assets/img/product/2.jpg','assets/img/product/3.jpg'];
  ngOnInit() {
  }

}
