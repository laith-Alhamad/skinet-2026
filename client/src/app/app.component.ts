import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header.component";
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Product } from './shared/models/product';
import { pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  baseUrl='http://localhost:5270/api/'
  private http = inject(HttpClient);
  title = 'client';
  products: Product[] = [];

  ngOnInit(): void {
    this.http.get<pagination<Product>>(this.baseUrl + 'products').subscribe({
      next: response => this.products = response.data,
      error: error=>console.log(error),
      complete:() => console.log('complete')
    })
  }

}
