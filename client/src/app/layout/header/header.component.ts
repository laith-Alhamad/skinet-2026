import { Component, inject } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatBadge} from '@angular/material/badge';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {Busy} from '../../core/services/busy.service';
import {MatProgressBar} from '@angular/material/progress-bar';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterLink,
    RouterLinkActive,MatProgressBar,

],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {

   busyService = inject(Busy); 
   cartService = inject(CartService);
   

}
