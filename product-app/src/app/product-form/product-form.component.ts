import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.html'
})
export class ProductFormComponent {

  product = { name: '', price: 0, description: '' };

  constructor(private service: ProductService) {}

  submit() {
    this.service.addProduct(this.product).subscribe(() => {
      alert('Product Added!');
      this.service.productAdded.next();
      this.product = { name: '', price: 0, description: '' };
    });
  }
}
