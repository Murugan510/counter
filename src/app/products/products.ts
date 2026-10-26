import { Component, signal } from '@angular/core';
import { Injectable,inject } from '@angular/core';
import { ApiService } from '../services/api';
import { FormsModule } from '@angular/forms';

export interface Root {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}


@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
private productService = inject(ApiService)

products = signal<Product[]>([])
searchInput = signal<string>('')

loadProducts(){

  this.productService.getProduct().subscribe((res)=>{
    const data = res as Root
    this.products.set(data?.products)
    console.log(data);
  })

}

ngOnInit(){
  this.loadProducts()
}



}
