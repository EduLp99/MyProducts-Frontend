import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product',
  imports: [MatButton],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private router: Router) {
  }
  
  getProduct(): void {
    this.router.navigate(['/products/list'])
  }
}
