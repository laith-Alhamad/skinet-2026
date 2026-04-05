import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../services/cart.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {

  cartService = inject(CartService);
  platformId = inject(PLATFORM_ID);

  init() {

    // 👇 أهم سطر
    if (isPlatformBrowser(this.platformId)) {
      const cartId = localStorage.getItem('cart_Id');
      return cartId ? this.cartService.getCart(cartId) : of(null);
    }

    // 👇 إذا على السيرفر
    return of(null);
  }
}