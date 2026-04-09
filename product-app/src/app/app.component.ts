import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductFormComponent,
    ProductListComponent,
    HttpClientModule
  ],
  template: `
    <app-product-form></app-product-form>
    <hr>
    <app-product-list></app-product-list>
  `
})
export class AppComponent {}