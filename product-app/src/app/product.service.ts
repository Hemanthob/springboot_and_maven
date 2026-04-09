import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/products';
  productAdded = new Subject<void>();
  private refreshNeeded = new Subject<void>();
  refresh$ = this.refreshNeeded.asObservable(); 

  constructor(private http: HttpClient) {}

  addProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  triggerRefresh() {
    this.refreshNeeded.next();
  }
}