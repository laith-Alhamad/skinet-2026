import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-errorcomponent',
  standalone:true,
  imports: [
    MatCard,
  ],
  templateUrl: './server-errorcomponent.html',
  styleUrl: './server-errorcomponent.css',
})
export class ServerErrorcomponent {

  error?: any;

  constructor(private router: Router){
    const navigation = this.router.currentNavigation();
    this.error = navigation?.extras.state?.['error'];
  }



}
