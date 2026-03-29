import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-foundcomponent',
  standalone:true,
  imports: [
    MatIcon,MatButton,RouterLink,
  ],
  templateUrl: './not-foundcomponent.html',
  styleUrl: './not-foundcomponent.css',
})
export class NotFoundcomponent {}
