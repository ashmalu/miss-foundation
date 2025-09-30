import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("/api/addNewProduct", product, {responseType: "json"});
  }

  public getAllProducts() {
    return this.httpClient.get<Product[]>("/api/getAllProducts");
  }

  public getProductDetailsById(productId: number) {
    return this.httpClient.get<Product>("/api/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("/api/deleteProductDetails/"+productId);
  }
}
