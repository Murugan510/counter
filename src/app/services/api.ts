import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private http = inject(HttpClient)
 private productUrl = 'https://dummyjson.com/products'

  getProduct(){
    return this.http.get(this.productUrl)
  }
}
