import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PATH_OF_API = 'https://springboot-backend-taskmanager-c9cuefhhbpg0g0fp.canadacentral-01.azurewebsites.net';

  constructor(private httpClient: HttpClient) { }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>(this.PATH_OF_API+"/api/addNewProduct", product, {responseType: "json"});
  }

  public getAllProducts() {
    return this.httpClient.get<Product[]>(this.PATH_OF_API+"/api/getAllProducts");
  }

  public getProductDetailsById(productId: number) {
    return this.httpClient.get<Product>(this.PATH_OF_API+"/api/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete(this.PATH_OF_API+"/api/deleteProductDetails/"+productId);
  }
}
