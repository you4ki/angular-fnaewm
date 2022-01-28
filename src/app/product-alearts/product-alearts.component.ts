import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alearts',
  templateUrl: './product-alearts.component.html',
  styleUrls: ['./product-alearts.component.css'],
})
export class ProductAleartsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
