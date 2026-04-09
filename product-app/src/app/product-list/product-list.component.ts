import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.loadProducts(); // 👈 LOAD ON PAGE START

    // 👇 listen for new product added
    this.service.productAdded.subscribe(() => {
      this.loadProducts();
    });
  }

  loadProducts() {
    this.service.getProducts().subscribe({
      next: (data: any) => {
        console.log("Fetched products:", data); // debug
        this.products = data;
      },
      error: (err) => {
        console.error("Error fetching products", err);
      }
    });
  }
}