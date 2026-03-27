import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header.component";
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Product } from './shared/models/product';
import { pagination } from './shared/models/pagination';
import { ShopService } from './core/services/shop.service';
import { ShopComponent } from "./features/shop/shop.component";
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Header, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
     
  title = 'client';
   



}
