import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemcomponent } from "../cart-itemcomponent/cart-itemcomponent";
import { OrderSummarycomponent } from "../../shared/components/order-summarycomponent/order-summarycomponent";

@Component({
  selector: 'app-cartcomponent',
  imports: [CartItemcomponent, OrderSummarycomponent],
  templateUrl: './cartcomponent.html',
  styleUrl: './cartcomponent.css',
})
export class Cartcomponent {

  cartService = inject (CartService);
  

}
