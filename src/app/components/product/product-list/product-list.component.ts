import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = []
  displayedColumns: string[] = ['name', 'price', 'quantity'];
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getList().subscribe(products => {
      this.products = products
    })
  }

}
